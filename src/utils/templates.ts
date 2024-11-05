export const TAILWIND_CONFIG_JS = `/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export const texts = <%= texts %>;

export const shadows = <%= shadows %>;

export const borderRadii = <%= borderRadii %>;

const config = {
  darkMode: ["class"],
  safelist: [".dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: <%= colors %>,
    fontSize: {
      ...texts,
      inherit: 'inherit',
    },
    boxShadow: {
      ...shadows,
      none: defaultTheme.boxShadow.none,
    },
    extend: {
      borderRadius: {
        ...borderRadii,
      },
      animation: <%= animations %>,
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;`;

export const TAILWIND_CONFIG_TS = `import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

export const texts = <%= texts %> as unknown as Record<string, string>;

export const shadows = <%= shadows %> as unknown as Record<string, string>;

export const borderRadii = <%= borderRadii %> as unknown as Record<string, string>;

const config = {
  darkMode: ["class"],
  safelist: [".dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: <%= colors %>,
    fontSize: {
      ...texts,
      inherit: 'inherit',
    },
    boxShadow: {
      ...shadows,
      none: defaultTheme.boxShadow.none,
    },
    extend: {
      borderRadius: {
        ...borderRadii,
      },
      animation: <%= animations %>,
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;`;

export const GLOBALS_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /*#region Colors */
  :root {
    --neutral-950: <%- neutral[950] %>;
    --neutral-900: <%- neutral[900] %>;
    --neutral-800: <%- neutral[800] %>;
    --neutral-700: <%- neutral[700] %>;
    --neutral-600: <%- neutral[600] %>;
    --neutral-500: <%- neutral[500] %>;
    --neutral-400: <%- neutral[400] %>;
    --neutral-300: <%- neutral[300] %>;
    --neutral-200: <%- neutral[200] %>;
    --neutral-100: <%- neutral[100] %>;
    --neutral-50: <%- neutral[50] %>;
    --neutral-0: <%- neutral[0] %>;

    --neutral-alpha-24: <%- neutral['alpha-24'] %>;
    --neutral-alpha-16: <%- neutral['alpha-16'] %>;
    --neutral-alpha-10: <%- neutral['alpha-10'] %>;

    --blue-950: <%- blue[950] %>;
    --blue-900: <%- blue[900] %>;
    --blue-800: <%- blue[800] %>;
    --blue-700: <%- blue[700] %>;
    --blue-600: <%- blue[600] %>;
    --blue-500: <%- blue[500] %>;
    --blue-400: <%- blue[400] %>;
    --blue-300: <%- blue[300] %>;
    --blue-200: <%- blue[200] %>;
    --blue-100: <%- blue[100] %>;
    --blue-50: <%- blue[50] %>;

    --blue-alpha-24: <%- blue['alpha-24'] %>;
    --blue-alpha-16: <%- blue['alpha-16'] %>;
    --blue-alpha-10: <%- blue['alpha-10'] %>;

    --orange-950: <%- orange[950] %>;
    --orange-900: <%- orange[900] %>;
    --orange-800: <%- orange[800] %>;
    --orange-700: <%- orange[700] %>;
    --orange-600: <%- orange[600] %>;
    --orange-500: <%- orange[500] %>;
    --orange-400: <%- orange[400] %>;
    --orange-300: <%- orange[300] %>;
    --orange-200: <%- orange[200] %>;
    --orange-100: <%- orange[100] %>;
    --orange-50: <%- orange[50] %>;

    --orange-alpha-24: <%- orange['alpha-24'] %>;
    --orange-alpha-16: <%- orange['alpha-16'] %>;
    --orange-alpha-10: <%- orange['alpha-10'] %>;

    --red-950: <%- red[950] %>;
    --red-900: <%- red[900] %>;
    --red-800: <%- red[800] %>;
    --red-700: <%- red[700] %>;
    --red-600: <%- red[600] %>;
    --red-500: <%- red[500] %>;
    --red-400: <%- red[400] %>;
    --red-300: <%- red[300] %>;
    --red-200: <%- red[200] %>;
    --red-100: <%- red[100] %>;
    --red-50: <%- red[50] %>;

    --red-alpha-24: <%- red['alpha-24'] %>;
    --red-alpha-16: <%- red['alpha-16'] %>;
    --red-alpha-10: <%- red['alpha-10'] %>;

    --green-950: <%- green[950] %>;
    --green-900: <%- green[900] %>;
    --green-800: <%- green[800] %>;
    --green-700: <%- green[700] %>;
    --green-600: <%- green[600] %>;
    --green-500: <%- green[500] %>;
    --green-400: <%- green[400] %>;
    --green-300: <%- green[300] %>;
    --green-200: <%- green[200] %>;
    --green-100: <%- green[100] %>;
    --green-50: <%- green[50] %>;

    --green-alpha-24: <%- green['alpha-24'] %>;
    --green-alpha-16: <%- green['alpha-16'] %>;
    --green-alpha-10: <%- green['alpha-10'] %>;

    --yellow-950: <%- yellow[950] %>;
    --yellow-900: <%- yellow[900] %>;
    --yellow-800: <%- yellow[800] %>;
    --yellow-700: <%- yellow[700] %>;
    --yellow-600: <%- yellow[600] %>;
    --yellow-500: <%- yellow[500] %>;
    --yellow-400: <%- yellow[400] %>;
    --yellow-300: <%- yellow[300] %>;
    --yellow-200: <%- yellow[200] %>;
    --yellow-100: <%- yellow[100] %>;
    --yellow-50: <%- yellow[50] %>;

    --yellow-alpha-24: <%- yellow['alpha-24'] %>;
    --yellow-alpha-16: <%- yellow['alpha-16'] %>;
    --yellow-alpha-10: <%- yellow['alpha-10'] %>;

    --purple-950: <%- purple[950] %>;
    --purple-900: <%- purple[900] %>;
    --purple-800: <%- purple[800] %>;
    --purple-700: <%- purple[700] %>;
    --purple-600: <%- purple[600] %>;
    --purple-500: <%- purple[500] %>;
    --purple-400: <%- purple[400] %>;
    --purple-300: <%- purple[300] %>;
    --purple-200: <%- purple[200] %>;
    --purple-100: <%- purple[100] %>;
    --purple-50: <%- purple[50] %>;

    --purple-alpha-24: <%- purple['alpha-24'] %>;
    --purple-alpha-16: <%- purple['alpha-16'] %>;
    --purple-alpha-10: <%- purple['alpha-10'] %>;

    --sky-950: <%- sky[950] %>;
    --sky-900: <%- sky[900] %>;
    --sky-800: <%- sky[800] %>;
    --sky-700: <%- sky[700] %>;
    --sky-600: <%- sky[600] %>;
    --sky-500: <%- sky[500] %>;
    --sky-400: <%- sky[400] %>;
    --sky-300: <%- sky[300] %>;
    --sky-200: <%- sky[200] %>;
    --sky-100: <%- sky[100] %>;
    --sky-50: <%- sky[50] %>;

    --sky-alpha-24: <%- sky['alpha-24'] %>;
    --sky-alpha-16: <%- sky['alpha-16'] %>;
    --sky-alpha-10: <%- sky['alpha-10'] %>;

    --pink-950: <%- pink[950] %>;
    --pink-900: <%- pink[900] %>;
    --pink-800: <%- pink[800] %>;
    --pink-700: <%- pink[700] %>;
    --pink-600: <%- pink[600] %>;
    --pink-500: <%- pink[500] %>;
    --pink-400: <%- pink[400] %>;
    --pink-300: <%- pink[300] %>;
    --pink-200: <%- pink[200] %>;
    --pink-100: <%- pink[100] %>;
    --pink-50: <%- pink[50] %>;

    --pink-alpha-24: <%- pink['alpha-24'] %>;
    --pink-alpha-16: <%- pink['alpha-16'] %>;
    --pink-alpha-10: <%- pink['alpha-10'] %>;

    --teal-950: <%- teal[950] %>;
    --teal-900: <%- teal[900] %>;
    --teal-800: <%- teal[800] %>;
    --teal-700: <%- teal[700] %>;
    --teal-600: <%- teal[600] %>;
    --teal-500: <%- teal[500] %>;
    --teal-400: <%- teal[400] %>;
    --teal-300: <%- teal[300] %>;
    --teal-200: <%- teal[200] %>;
    --teal-100: <%- teal[100] %>;
    --teal-50: <%- teal[50] %>;

    --teal-alpha-24: <%- teal['alpha-24'] %>;
    --teal-alpha-16: <%- teal['alpha-16'] %>;
    --teal-alpha-10: <%- teal['alpha-10'] %>;

    --white-alpha-24: <%- white['alpha-24'] %>;
    --white-alpha-16: <%- white['alpha-16'] %>;
    --white-alpha-10: <%- white['alpha-10'] %>;

    --black-alpha-24: <%- black['alpha-24'] %>;
    --black-alpha-16: <%- black['alpha-16'] %>;
    --black-alpha-10: <%- black['alpha-10'] %>;

    --overlay: <%- overlay['default-light'] %>;

    --social-apple: <%- social['apple-light'] %>;
    --social-twitter: <%- social['twitter-light'] %>;
    --social-github: <%- social['github-light'] %>;
    --social-notion: <%- social['notion-light'] %>;
    --social-tidal: <%- social['tidal-light'] %>;
    --social-amazon: <%- social['amazon-light'] %>;
    --social-zendesk: <%- social['zendesk-light'] %>;

    --primary-dark: var(--<%- primaryColor %>-800);
    --primary-darker: var(--<%- primaryColor %>-700);
    --primary-base: var(--<%- primaryColor %>-500);
    --primary-alpha-24: var(--<%- primaryColor %>-alpha-24);
    --primary-alpha-16: var(--<%- primaryColor %>-alpha-16);
    --primary-alpha-10: var(--<%- primaryColor %>-alpha-10);

    --static-black: var(--neutral-950);
    --static-white: var(--neutral-0);

    --bg-strong-950: var(--neutral-950);
    --bg-surface-800: var(--neutral-800);
    --bg-sub-300: var(--neutral-300);
    --bg-soft-200: var(--neutral-200);
    --bg-weak-50: var(--neutral-50);
    --bg-white-0: var(--neutral-0);

    --text-strong-950: var(--neutral-950);
    --text-sub-600: var(--neutral-600);
    --text-soft-400: var(--neutral-400);
    --text-disabled-300: var(--neutral-300);
    --text-white-0: var(--neutral-0);

    --stroke-strong-950: var(--neutral-950);
    --stroke-sub-300: var(--neutral-300);
    --stroke-soft-200: var(--neutral-200);
    --stroke-white-0: var(--neutral-0);

    --faded-dark: var(--neutral-800);
    --faded-base: var(--neutral-500);
    --faded-light: var(--neutral-200);
    --faded-lighter: var(--neutral-100);

    --information-dark: var(--blue-950);
    --information-base: var(--blue-500);
    --information-light: var(--blue-200);
    --information-lighter: var(--blue-50);

    --warning-dark: var(--orange-950);
    --warning-base: var(--orange-500);
    --warning-light: var(--orange-200);
    --warning-lighter: var(--orange-50);

    --error-dark: var(--red-950);
    --error-base: var(--red-500);
    --error-light: var(--red-200);
    --error-lighter: var(--red-50);

    --success-dark: var(--green-950);
    --success-base: var(--green-500);
    --success-light: var(--green-200);
    --success-lighter: var(--green-50);

    --away-dark: var(--yellow-950);
    --away-base: var(--yellow-500);
    --away-light: var(--yellow-200);
    --away-lighter: var(--yellow-50);

    --feature-dark: var(--purple-950);
    --feature-base: var(--purple-500);
    --feature-light: var(--purple-200);
    --feature-lighter: var(--purple-50);

    --verified-dark: var(--sky-950);
    --verified-base: var(--sky-500);
    --verified-light: var(--sky-200);
    --verified-lighter: var(--sky-50);

    --highlighted-dark: var(--pink-950);
    --highlighted-base: var(--pink-500);
    --highlighted-light: var(--pink-200);
    --highlighted-lighter: var(--pink-50);

    --stable-dark: var(--teal-950);
    --stable-base: var(--teal-500);
    --stable-light: var(--teal-200);
    --stable-lighter: var(--teal-50);
  }
    
  .dark {
    --bg-strong-950: var(--neutral-0);
    --bg-surface-800: var(--neutral-200);
    --bg-sub-300: var(--neutral-600);
    --bg-soft-200: var(--neutral-700);
    --bg-weak-50: var(--neutral-900);
    --bg-white-0: var(--neutral-950);

    --text-strong-950: var(--neutral-0);
    --text-sub-600: var(--neutral-400);
    --text-soft-400: var(--neutral-500);
    --text-disabled-300: var(--neutral-600);
    --text-white-0: var(--neutral-950);

    --stroke-strong-950: var(--neutral-0);
    --stroke-sub-300: var(--neutral-600);
    --stroke-soft-200: var(--neutral-700);
    --stroke-white-0: var(--neutral-950);

    --faded-dark: var(--neutral-300);
    --faded-base: var(--neutral-500);
    --faded-light: var(--neutral-alpha-24);
    --faded-lighter: var(--neutral-alpha-16);

    --information-dark: var(--blue-400);
    --information-base: var(--blue-500);
    --information-light: var(--blue-alpha-24);
    --information-lighter: var(--blue-alpha-16);

    --warning-dark: var(--orange-400);
    --warning-base: var(--orange-600);
    --warning-light: var(--orange-alpha-24);
    --warning-lighter: var(--orange-alpha-16);

    --error-dark: var(--red-400);
    --error-base: var(--red-600);
    --error-light: var(--red-alpha-24);
    --error-lighter: var(--red-alpha-16);

    --success-dark: var(--green-400);
    --success-base: var(--green-600);
    --success-light: var(--green-alpha-24);
    --success-lighter: var(--green-alpha-16);

    --away-dark: var(--yellow-400);
    --away-base: var(--yellow-600);
    --away-light: var(--yellow-alpha-24);
    --away-lighter: var(--yellow-alpha-16);

    --feature-dark: var(--purple-400);
    --feature-base: var(--purple-500);
    --feature-light: var(--purple-alpha-24);
    --feature-lighter: var(--purple-alpha-16);

    --verified-dark: var(--sky-400);
    --verified-base: var(--sky-600);
    --verified-light: var(--sky-alpha-24);
    --verified-lighter: var(--sky-alpha-16);

    --highlighted-dark: var(--pink-400);
    --highlighted-base: var(--pink-600);
    --highlighted-light: var(--pink-alpha-24);
    --highlighted-lighter: var(--pink-alpha-16);

    --stable-dark: var(--teal-400);
    --stable-base: var(--teal-600);
    --stable-light: var(--teal-alpha-24);
    --stable-lighter: var(--teal-alpha-16);

    --overlay: <%- overlay['default-dark'] %>;
    
    --social-apple: <%- social['apple-dark'] %>;
    --social-twitter: <%- social['twitter-dark'] %>;
    --social-github: <%- social['github-dark'] %>;
    --social-notion: <%- social['notion-dark'] %>;
    --social-tidal: <%- social['tidal-dark'] %>;
    --social-amazon: <%- social['amazon-dark'] %>;
    --social-zendesk: <%- social['zendesk-dark'] %>;
  }
  /*#endregion Colors */
}
  
/* custom scale for Remix Icon */
.remixicon path {
  transform: scale(0.8996);
  transform-origin: center;
}
`;
