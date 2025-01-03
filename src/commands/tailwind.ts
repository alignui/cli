import { existsSync, promises as fs } from 'fs';
import path from 'path';
import * as templates from '@/src/utils/templates';
import { Command } from 'commander';
import { execa } from 'execa';
import template from 'lodash.template';
import { z } from 'zod';
import { intro, outro, text, select, isCancel, spinner } from '@clack/prompts';
import {
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_TAILWIND_CSS,
  rawConfigSchema,
  resolveConfigPaths,
  type Config,
} from '@/src/utils/get-config';
import { getPackageManager } from '@/src/utils/get-package-manager';
import { getProjectConfig, preFlight } from '@/src/utils/get-project-info';
import {
  rawHexColors,
  tailwindColorsHex,
  tailwindColorsHsl,
  tailwindColorsRgb,
  borderRadii,
  texts,
  shadows,
  animations,
} from '@/src/utils/tokens';
import { prettierFormat } from '@/src/utils/prettier';
import { formatHslColor, formatRgbColor } from '@/src/utils/color-helpers';

const PROJECT_DEV_DEPENDENCIES = ['tailwindcss-animate'];

const tailwindInitOptionsSchema = z.object({
  cwd: z.string(),
});

export const initTailwind = new Command()
  .name('tailwind')
  .description('Initialize AlignUI tailwind tokens for your project.')
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd(),
  )
  .action(async (opts) => {
    try {
      intro('AlignUI Tailwind Setup');

      const options = tailwindInitOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);

      if (!existsSync(cwd)) {
        console.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }

      preFlight(cwd);
      const projectConfig = await getProjectConfig(cwd);

      if (projectConfig) {
        const config = await promptForConfig(cwd, projectConfig);
        await runInit(cwd, config);
      }

      outro('Project initialization completed!');
    } catch (error) {
      console.log(error);
    }
  });

async function promptForConfig(cwd: string, defaultConfig: Config) {
  const primaryColor = await select({
    message: 'Which color would you like to use as primary color?',
    options: [
      { value: 'blue', label: 'Blue' },
      { value: 'purple', label: 'Purple' },
      { value: 'orange', label: 'Orange' },
      { value: 'sky', label: 'Sky' },
    ],
  });

  if (isCancel(primaryColor)) process.exit(0);

  const neutralColor = await select({
    message: 'Which color would you like to use as neutral color?',
    options: [
      { value: 'gray', label: 'Gray' },
      { value: 'slate', label: 'Slate' },
    ],
  });

  if (isCancel(neutralColor)) process.exit(0);

  const colorFormat = await select({
    message: 'Which color format would you like to use?',
    options: [
      { value: 'hex', label: 'hex' },
      { value: 'rgb', label: 'rgb' },
      { value: 'hsl', label: 'hsl' },
    ],
  });

  if (isCancel(colorFormat)) process.exit(0);

  const tailwindPrefix = await text({
    message: 'Use a custom prefix for AlignUI classes? (Leave blank for none)',
  });

  if (isCancel(tailwindPrefix)) process.exit(0);

  const tailwindConfig = await text({
    message: 'Where is your tailwind config file?',
    initialValue: defaultConfig?.tailwind.config ?? DEFAULT_TAILWIND_CONFIG,
  });

  const tailwindCss = await text({
    message: 'Where is your global CSS file?',
    initialValue: defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS,
  });

  const config = rawConfigSchema.parse({
    tailwind: {
      config: tailwindConfig,
      css: tailwindCss,
      primaryColor: primaryColor,
      neutralColor: neutralColor,
      colorFormat: colorFormat,
      prefix: tailwindPrefix,
    },
  });

  return await resolveConfigPaths(cwd, config);
}

function applyPrefixToKeys<T extends Record<string, any>>(
  obj: T,
  prefix: string | undefined,
): T {
  if (!prefix) return obj;

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value]),
  ) as T;
}

async function runInit(cwd: string, config: Config) {
  const s = spinner();

  s.start('Initializing project...');
  try {
    // Ensure necessary directories exist
    for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
      const dirname = path.extname(resolvedPath)
        ? path.dirname(resolvedPath)
        : resolvedPath;
      if (!existsSync(dirname)) {
        await fs.mkdir(dirname, { recursive: true });
      }
    }

    // Generate Tailwind config file
    const tailwindConfigTemplate =
      path.extname(config.resolvedPaths.tailwindConfig) === '.ts'
        ? templates.TAILWIND_CONFIG_TS
        : templates.TAILWIND_CONFIG_JS;

    let tailwindColorsInSelectedFormat =
      config.tailwind.colorFormat === 'rgb'
        ? tailwindColorsRgb
        : config.tailwind.colorFormat === 'hsl'
          ? tailwindColorsHsl
          : tailwindColorsHex;

    let textValues = texts;
    let shadowValues = shadows;

    if (config.tailwind.prefix) {
      tailwindColorsInSelectedFormat = applyPrefixToKeys(
        tailwindColorsInSelectedFormat,
        config.tailwind.prefix,
      );
      textValues = applyPrefixToKeys(texts, config.tailwind.prefix);
      shadowValues = applyPrefixToKeys(shadows, config.tailwind.prefix);
    }

    await fs.writeFile(
      config.resolvedPaths.tailwindConfig,
      await prettierFormat(
        template(tailwindConfigTemplate)({
          prefix: config.tailwind.prefix,
          colors: JSON.stringify(tailwindColorsInSelectedFormat, null, 2),
          borderRadii: JSON.stringify(borderRadii, null, 2),
          texts: JSON.stringify(textValues, null, 2),
          shadows: JSON.stringify(shadowValues, null, 2),
          animations: JSON.stringify(animations, null, 2),
        }),
      ),
      'utf8',
    );

    // Write color variables in selected format to global CSS
    const colorVariables = Object.fromEntries(
      Object.entries(rawHexColors).map(([colorName, shades]) => [
        colorName,
        Object.fromEntries(
          Object.entries(shades).map(([shade, hex]) => {
            if (config.tailwind.colorFormat === 'hsl') {
              return [shade, formatHslColor(hex)];
            } else if (config.tailwind.colorFormat === 'rgb') {
              return [shade, formatRgbColor(hex)];
            }
            return [shade, hex];
          }),
        ),
      ]),
    );

    await fs.writeFile(
      config.resolvedPaths.tailwindCss,
      template(templates.GLOBALS_CSS)({
        primaryColor: config.tailwind.primaryColor,
        neutralColor: config.tailwind.neutralColor,
        ...colorVariables,
      }),
      'utf8',
    );

    s.stop();
  } catch (error) {
    s.stop('Initialization failed.');
    throw error;
  }

  const packageManager = await getPackageManager(cwd);
  const installSpinner = spinner();
  installSpinner.start('Installing dependencies...');

  await execa(
    packageManager,
    [
      packageManager === 'npm' ? 'i' : 'add',
      packageManager === 'npm' ? '--save-dev' : '-D',
      ...PROJECT_DEV_DEPENDENCIES,
    ],
    { cwd },
  );

  installSpinner.stop(
    `Dependencies installed!\n\n\t- ${PROJECT_DEV_DEPENDENCIES.join('\n- ')}`,
  );
}
