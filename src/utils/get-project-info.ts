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
      colorFormat: 'oklch',
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
    // Check for both v3 (@tailwind base) and v4 (@import "tailwindcss") formats
    if (
      contents.includes('@tailwind base') ||
      contents.includes('@import "tailwindcss"')
    ) {
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
  // In Tailwind v4, config files are optional due to CSS-first configuration
  // We only check if there's a CSS file with Tailwind directives
  const tailwindCssFile = await getTailwindCssFile(cwd);

  if (!tailwindCssFile) {
    throw new Error(
      'No CSS file found with Tailwind directives. Create a CSS file with "@import \'tailwindcss\';" or "@tailwind base;" to get started.',
    );
  }

  return true;
}
