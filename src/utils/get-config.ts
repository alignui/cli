import path from 'path';
import { z } from 'zod';

export const DEFAULT_TAILWIND_CSS = 'app/globals.css';
export const DEFAULT_TAILWIND_CONFIG = 'tailwind.config.js';

export const rawConfigSchema = z
  .object({
    tailwind: z.object({
      config: z.string(),
      css: z.string(),
      primaryColor: z.enum(['blue', 'purple', 'orange', 'sky']),
      colorFormat: z.enum(['hex', 'rgb', 'hsl']),
      prefix: z.string().default('').optional(),
    }),
  })
  .strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    tailwindConfig: z.string(),
    tailwindCss: z.string(),
  }),
});

export type Config = z.infer<typeof configSchema>;

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
  return configSchema.parse({
    ...config,
    resolvedPaths: {
      tailwindConfig: path.resolve(cwd, config.tailwind.config),
      tailwindCss: path.resolve(cwd, config.tailwind.css),
    },
  });
}
