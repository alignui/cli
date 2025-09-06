// Backward compatibility exports for users migrating from v0.0.2
// These exports maintain compatibility with existing TypeScript imports

export const texts = {
  'title-h1': [
    '3.5rem',
    {
      lineHeight: '4rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h2': [
    '3rem',
    {
      lineHeight: '3.5rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h3': [
    '2.5rem',
    {
      lineHeight: '3rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h4': [
    '2rem',
    {
      lineHeight: '2.5rem',
      letterSpacing: '-0.005em',
      fontWeight: '500',
    },
  ],
  'title-h5': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'title-h6': [
    '1.25rem',
    {
      lineHeight: '1.75rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'label-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '500',
    },
  ],
  'label-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '500',
    },
  ],
  'label-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'paragraph-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '400',
    },
  ],
  'paragraph-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '400',
    },
  ],
  'paragraph-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '400',
    },
  ],
  'subheading-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0.04em',
      fontWeight: '500',
    },
  ],
  'subheading-2xs': [
    '.6875rem',
    {
      lineHeight: '.75rem',
      letterSpacing: '0.02em',
      fontWeight: '500',
    },
  ],
  'doc-label': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'doc-paragraph': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
} as unknown as Record<string, string>;

export const shadows = {
  'regular-xs': '0 1px 2px 0 #0a0d1408',
  'regular-sm': '0 2px 4px #1b1c1d0a',
  'regular-md': '0 16px 32px -12px #0e121b1a',
  'button-primary-focus': [
    '0 0 0 2px var(--color-bg-white-0)',
    '0 0 0 4px var(--color-primary-alpha-10)',
  ],
  'button-important-focus': [
    '0 0 0 2px var(--color-bg-white-0)',
    '0 0 0 4px var(--color-neutral-alpha-16)',
  ],
  'button-error-focus': [
    '0 0 0 2px var(--color-bg-white-0)',
    '0 0 0 4px var(--color-red-alpha-10)',
  ],
  'fancy-buttons-neutral': ['0 1px 2px 0 #1b1c1d7a', '0 0 0 1px #242628'],
  'fancy-buttons-primary': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px var(--color-primary-base)',
  ],
  'fancy-buttons-error': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px var(--color-error-base)',
  ],
  'fancy-buttons-stroke': [
    '0 1px 3px 0 #0e121b1f',
    '0 0 0 1px var(--color-stroke-soft-200)',
  ],
  'toggle-switch': ['0 6px 10px 0 #0e121b0f', '0 2px 4px 0 #0e121b08'],
  'switch-thumb': ['0 4px 8px 0 #1b1c1d0f', '0 2px 4px 0 #0e121b14'],
  tooltip: ['0 12px 24px 0 #0e121b0f', '0 1px 2px 0 #0e121b08'],
  'custom-xs': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 4px 8px -2px rgba(51, 51, 51, 0.06)',
    '0 2px 4px rgba(51, 51, 51, 0.04)',
    '0 1px 2px rgba(51, 51, 51, 0.04)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
  'custom-sm': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 16px 8px -8px rgba(51, 51, 51, 0.01)',
    '0 12px 6px -6px rgba(51, 51, 51, 0.02)',
    '0 5px 5px -2.5px rgba(51, 51, 51, 0.08)',
    '0 1px 3px -1.5px rgba(51, 51, 51, 0.16)',
    'inset 0 -0.5px 0.5px rgba(51, 51, 51, 0.08)',
  ],
  'custom-md': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 1px 1px 0.5px rgba(51, 51, 51, 0.04)',
    '0 3px 3px -1.5px rgba(51, 51, 51, 0.02)',
    '0 6px 6px -3px rgba(51, 51, 51, 0.04)',
    '0 12px 12px -6px rgba(51, 51, 51, 0.04)',
    '0 24px 24px -12px rgba(51, 51, 51, 0.04)',
    '0 48px 48px -24px rgba(51, 51, 51, 0.04)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
  'custom-lg': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 1px 1px 0.5px rgba(51, 51, 51, 0.04)',
    '0 3px 3px -1.5px rgba(51, 51, 51, 0.02)',
    '0 6px 6px -3px rgba(51, 51, 51, 0.04)',
    '0 12px 12px -6px rgba(51, 51, 51, 0.04)',
    '0 24px 24px -12px rgba(51, 51, 51, 0.04)',
    '0 48px 48px -24px rgba(51, 51, 51, 0.04)',
    '0 96px 96px -32px rgba(51, 51, 51, 0.06)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
} as unknown as Record<string, string>;

export const borderRadii = {
  '10': '.625rem',
  '20': '1.25rem',
} as unknown as Record<string, string>;

// Backward compatibility note:
// These exports are provided for users migrating from v0.0.2
// For new projects, use the CSS-first approach with Tailwind v4.1
