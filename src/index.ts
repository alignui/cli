#!/usr/bin/env node

import { Command } from 'commander';
import { initTailwind } from '@/src/commands/tailwind';

import { getPackageInfo } from './utils/get-package-info';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const packageInfo = getPackageInfo();

  const program = new Command()
    .name('alignui-cli')
    .description(packageInfo.description || '')
    .version(
      packageInfo.version || '0.0.1',
      '-v, --version',
      'display the version number',
    );

  program.addCommand(initTailwind);
  program.parse();
}

main();
