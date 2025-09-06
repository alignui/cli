import path from 'path';
import { z } from 'zod';

export const DEFAULT_TAILWIND_CSS = 'app/globals.css';
export const DEFAULT_TAILWIND_CONFIG = 'tailwind.config.js';

export const rawConfigSchema = z
  .object({
    tailwind: z.object({
      config: z.string().optional(), // Optional in v4.1
      css: z.string(),
      primaryColor: z.enum(['blue', 'purple', 'orange', 'sky']),
      neutralColor: z.enum(['gray', 'slate']),
      colorFormat: z.enum(['hex', 'rgb', 'hsl', 'oklch']),
      prefix: z.string().default('').optional(),
    }),
  })
  .strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    tailwindConfig: z.string().optional(), // Optional in v4.1
    tailwindCss: z.string(),
  }),
});

export type Config = z.infer<typeof configSchema>;

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
  return configSchema.parse({
    ...config,
    resolvedPaths: {
      tailwindConfig: config.tailwind.config
        ? path.resolve(cwd, config.tailwind.config)
        : undefined,
      tailwindCss: path.resolve(cwd, config.tailwind.css),
    },
  });
}
