import path from 'path';
import { Config, RawConfig, resolveConfigPaths } from '@/src/utils/get-config';
import fg from 'fast-glob';
import fs, { pathExists } from 'fs-extra';

const PROJECT_SHARED_IGNORE = [
  '**/node_modules/**',
  '.next',
  'public',
  'dist',
  'build',
];

export async function getProjectConfig(cwd: string): Promise<Config | null> {
  const tailwindCssFile = await getTailwindCssFile(cwd);

  if (!tailwindCssFile) {
    throw new Error(
      'No CSS file found with Tailwind directives. Check your setup and follow the Tailwind installation instructions here: https://tailwindcss.com/docs/installation',
    );
  }

  const isTsx = await isTypeScriptProject(cwd);

  const config: RawConfig = {
    tailwind: {
      config: isTsx ? 'tailwind.config.ts' : 'tailwind.config.js',
      primaryColor: 'blue',
      neutralColor: 'gray',
      colorFormat: 'hex',
      css: tailwindCssFile,
      prefix: '',
    },
  };

  return await resolveConfigPaths(cwd, config);
}

export async function getTailwindCssFile(cwd: string) {
  const files = await fg.glob('**/*.css', {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!files.length) {
    return null;
  }

  for (const file of files) {
    const contents = await fs.readFile(path.resolve(cwd, file), 'utf8');
    // Assume that if the file contains `@tailwind base` it's the main css file.
    if (contents.includes('@tailwind base')) {
      return file;
    }
  }

  return null;
}

export async function isTypeScriptProject(cwd: string) {
  // Check if cwd has a tsconfig.json file.
  return pathExists(path.resolve(cwd, 'tsconfig.json'));
}

export async function preFlight(cwd: string) {
  // We need Tailwind CSS to be configured.
  const tailwindConfig = await fg.glob('tailwind.config.*', {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!tailwindConfig.length) {
    throw new Error(
      'Tailwind config file not found. Create a "tailwind.config.{js,ts}" file to get started.',
    );
  }

  return true;
}
