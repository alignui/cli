export const TAILWIND_CONFIG_JS = `/** @type {import('tailwindcss').Config} */
// Tailwind v4.1 - Minimal config (most configuration is now in CSS)
export default {
  darkMode: ["class"],
  // Content detection is automatic in v4, but you can override if needed
  // content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: ["@tailwindcss/postcss"],
};`;

export const TAILWIND_CONFIG_TS = `import type { Config } from "tailwindcss";

// Tailwind v4.1 - Minimal config (most configuration is now in CSS)
const config = {
  darkMode: ["class"],
  // Content detection is automatic in v4, but you can override if needed
  // content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: ["@tailwindcss/postcss"],
} satisfies Config;

export default config;`;

export const GLOBALS_CSS = `<%- config.tailwind.prefix ? \`@import "tailwindcss" prefix(\${config.tailwind.prefix});\` : '@import "tailwindcss";' %>

@theme {
  /* AlignUI Raw Colors */
  --color-gray-950: <%- gray[950] %>;
  --color-gray-900: <%- gray[900] %>;
  --color-gray-800: <%- gray[800] %>;
  --color-gray-700: <%- gray[700] %>;
  --color-gray-600: <%- gray[600] %>;
  --color-gray-500: <%- gray[500] %>;
  --color-gray-400: <%- gray[400] %>;
  --color-gray-300: <%- gray[300] %>;
  --color-gray-200: <%- gray[200] %>;
  --color-gray-100: <%- gray[100] %>;
  --color-gray-50: <%- gray[50] %>;
  --color-gray-0: <%- gray[0] %>;
  --color-gray-alpha-24: <%- gray['alpha-24'] %>;
  --color-gray-alpha-16: <%- gray['alpha-16'] %>;
  --color-gray-alpha-10: <%- gray['alpha-10'] %>;
  
  --color-slate-950: <%- slate[950] %>;
  --color-slate-900: <%- slate[900] %>;
  --color-slate-800: <%- slate[800] %>;
  --color-slate-700: <%- slate[700] %>;
  --color-slate-600: <%- slate[600] %>;
  --color-slate-500: <%- slate[500] %>;
  --color-slate-400: <%- slate[400] %>;
  --color-slate-300: <%- slate[300] %>;
  --color-slate-200: <%- slate[200] %>;
  --color-slate-100: <%- slate[100] %>;
  --color-slate-50: <%- slate[50] %>;
  --color-slate-0: <%- slate[0] %>;
  --color-slate-alpha-24: <%- slate['alpha-24'] %>;
  --color-slate-alpha-16: <%- slate['alpha-16'] %>;
  --color-slate-alpha-10: <%- slate['alpha-10'] %>;

  --color-blue-950: <%- blue[950] %>;
  --color-blue-900: <%- blue[900] %>;
  --color-blue-800: <%- blue[800] %>;
  --color-blue-700: <%- blue[700] %>;
  --color-blue-600: <%- blue[600] %>;
  --color-blue-500: <%- blue[500] %>;
  --color-blue-400: <%- blue[400] %>;
  --color-blue-300: <%- blue[300] %>;
  --color-blue-200: <%- blue[200] %>;
  --color-blue-100: <%- blue[100] %>;
  --color-blue-50: <%- blue[50] %>;
  --color-blue-alpha-24: <%- blue['alpha-24'] %>;
  --color-blue-alpha-16: <%- blue['alpha-16'] %>;
  --color-blue-alpha-10: <%- blue['alpha-10'] %>;

  --color-orange-950: <%- orange[950] %>;
  --color-orange-900: <%- orange[900] %>;
  --color-orange-800: <%- orange[800] %>;
  --color-orange-700: <%- orange[700] %>;
  --color-orange-600: <%- orange[600] %>;
  --color-orange-500: <%- orange[500] %>;
  --color-orange-400: <%- orange[400] %>;
  --color-orange-300: <%- orange[300] %>;
  --color-orange-200: <%- orange[200] %>;
  --color-orange-100: <%- orange[100] %>;
  --color-orange-50: <%- orange[50] %>;
  --color-orange-alpha-24: <%- orange['alpha-24'] %>;
  --color-orange-alpha-16: <%- orange['alpha-16'] %>;
  --color-orange-alpha-10: <%- orange['alpha-10'] %>;

  --color-red-950: <%- red[950] %>;
  --color-red-900: <%- red[900] %>;
  --color-red-800: <%- red[800] %>;
  --color-red-700: <%- red[700] %>;
  --color-red-600: <%- red[600] %>;
  --color-red-500: <%- red[500] %>;
  --color-red-400: <%- red[400] %>;
  --color-red-300: <%- red[300] %>;
  --color-red-200: <%- red[200] %>;
  --color-red-100: <%- red[100] %>;
  --color-red-50: <%- red[50] %>;
  --color-red-alpha-24: <%- red['alpha-24'] %>;
  --color-red-alpha-16: <%- red['alpha-16'] %>;
  --color-red-alpha-10: <%- red['alpha-10'] %>;

  --color-green-950: <%- green[950] %>;
  --color-green-900: <%- green[900] %>;
  --color-green-800: <%- green[800] %>;
  --color-green-700: <%- green[700] %>;
  --color-green-600: <%- green[600] %>;
  --color-green-500: <%- green[500] %>;
  --color-green-400: <%- green[400] %>;
  --color-green-300: <%- green[300] %>;
  --color-green-200: <%- green[200] %>;
  --color-green-100: <%- green[100] %>;
  --color-green-50: <%- green[50] %>;
  --color-green-alpha-24: <%- green['alpha-24'] %>;
  --color-green-alpha-16: <%- green['alpha-16'] %>;
  --color-green-alpha-10: <%- green['alpha-10'] %>;

  --color-yellow-950: <%- yellow[950] %>;
  --color-yellow-900: <%- yellow[900] %>;
  --color-yellow-800: <%- yellow[800] %>;
  --color-yellow-700: <%- yellow[700] %>;
  --color-yellow-600: <%- yellow[600] %>;
  --color-yellow-500: <%- yellow[500] %>;
  --color-yellow-400: <%- yellow[400] %>;
  --color-yellow-300: <%- yellow[300] %>;
  --color-yellow-200: <%- yellow[200] %>;
  --color-yellow-100: <%- yellow[100] %>;
  --color-yellow-50: <%- yellow[50] %>;
  --color-yellow-alpha-24: <%- yellow['alpha-24'] %>;
  --color-yellow-alpha-16: <%- yellow['alpha-16'] %>;
  --color-yellow-alpha-10: <%- yellow['alpha-10'] %>;

  --color-purple-950: <%- purple[950] %>;
  --color-purple-900: <%- purple[900] %>;
  --color-purple-800: <%- purple[800] %>;
  --color-purple-700: <%- purple[700] %>;
  --color-purple-600: <%- purple[600] %>;
  --color-purple-500: <%- purple[500] %>;
  --color-purple-400: <%- purple[400] %>;
  --color-purple-300: <%- purple[300] %>;
  --color-purple-200: <%- purple[200] %>;
  --color-purple-100: <%- purple[100] %>;
  --color-purple-50: <%- purple[50] %>;
  --color-purple-alpha-24: <%- purple['alpha-24'] %>;
  --color-purple-alpha-16: <%- purple['alpha-16'] %>;
  --color-purple-alpha-10: <%- purple['alpha-10'] %>;

  --color-sky-950: <%- sky[950] %>;
  --color-sky-900: <%- sky[900] %>;
  --color-sky-800: <%- sky[800] %>;
  --color-sky-700: <%- sky[700] %>;
  --color-sky-600: <%- sky[600] %>;
  --color-sky-500: <%- sky[500] %>;
  --color-sky-400: <%- sky[400] %>;
  --color-sky-300: <%- sky[300] %>;
  --color-sky-200: <%- sky[200] %>;
  --color-sky-100: <%- sky[100] %>;
  --color-sky-50: <%- sky[50] %>;
  --color-sky-alpha-24: <%- sky['alpha-24'] %>;
  --color-sky-alpha-16: <%- sky['alpha-16'] %>;
  --color-sky-alpha-10: <%- sky['alpha-10'] %>;

  --color-pink-950: <%- pink[950] %>;
  --color-pink-900: <%- pink[900] %>;
  --color-pink-800: <%- pink[800] %>;
  --color-pink-700: <%- pink[700] %>;
  --color-pink-600: <%- pink[600] %>;
  --color-pink-500: <%- pink[500] %>;
  --color-pink-400: <%- pink[400] %>;
  --color-pink-300: <%- pink[300] %>;
  --color-pink-200: <%- pink[200] %>;
  --color-pink-100: <%- pink[100] %>;
  --color-pink-50: <%- pink[50] %>;
  --color-pink-alpha-24: <%- pink['alpha-24'] %>;
  --color-pink-alpha-16: <%- pink['alpha-16'] %>;
  --color-pink-alpha-10: <%- pink['alpha-10'] %>;

  --color-teal-950: <%- teal[950] %>;
  --color-teal-900: <%- teal[900] %>;
  --color-teal-800: <%- teal[800] %>;
  --color-teal-700: <%- teal[700] %>;
  --color-teal-600: <%- teal[600] %>;
  --color-teal-500: <%- teal[500] %>;
  --color-teal-400: <%- teal[400] %>;
  --color-teal-300: <%- teal[300] %>;
  --color-teal-200: <%- teal[200] %>;
  --color-teal-100: <%- teal[100] %>;
  --color-teal-50: <%- teal[50] %>;
  --color-teal-alpha-24: <%- teal['alpha-24'] %>;
  --color-teal-alpha-16: <%- teal['alpha-16'] %>;
  --color-teal-alpha-10: <%- teal['alpha-10'] %>;

  --color-white-alpha-24: <%- white['alpha-24'] %>;
  --color-white-alpha-16: <%- white['alpha-16'] %>;
  --color-white-alpha-10: <%- white['alpha-10'] %>;

  --color-black-alpha-24: <%- black['alpha-24'] %>;
  --color-black-alpha-16: <%- black['alpha-16'] %>;
  --color-black-alpha-10: <%- black['alpha-10'] %>;

  /* AlignUI Dynamic Neutral Colors */
  --color-neutral-950: var(--color-<%- neutralColor %>-950);
  --color-neutral-900: var(--color-<%- neutralColor %>-900);
  --color-neutral-800: var(--color-<%- neutralColor %>-800);
  --color-neutral-700: var(--color-<%- neutralColor %>-700);
  --color-neutral-600: var(--color-<%- neutralColor %>-600);
  --color-neutral-500: var(--color-<%- neutralColor %>-500);
  --color-neutral-400: var(--color-<%- neutralColor %>-400);
  --color-neutral-300: var(--color-<%- neutralColor %>-300);
  --color-neutral-200: var(--color-<%- neutralColor %>-200);
  --color-neutral-100: var(--color-<%- neutralColor %>-100);
  --color-neutral-50: var(--color-<%- neutralColor %>-50);
  --color-neutral-0: var(--color-<%- neutralColor %>-0);
  --color-neutral-alpha-24: var(--color-<%- neutralColor %>-alpha-24);
  --color-neutral-alpha-16: var(--color-<%- neutralColor %>-alpha-16);
  --color-neutral-alpha-10: var(--color-<%- neutralColor %>-alpha-10);

  /* AlignUI Dynamic Primary Colors */
  --color-primary-dark: var(--color-<%- primaryColor %>-800);
  --color-primary-darker: var(--color-<%- primaryColor %>-700);
  --color-primary-base: var(--color-<%- primaryColor %>-500);
  --color-primary-alpha-24: var(--color-<%- primaryColor %>-alpha-24);
  --color-primary-alpha-16: var(--color-<%- primaryColor %>-alpha-16);
  --color-primary-alpha-10: var(--color-<%- primaryColor %>-alpha-10);

  /* AlignUI Social Colors */
  --color-social-apple: <%- social['apple-light'] %>;
  --color-social-twitter: <%- social['twitter-light'] %>;
  --color-social-github: <%- social['github-light'] %>;
  --color-social-notion: <%- social['notion-light'] %>;
  --color-social-tidal: <%- social['tidal-light'] %>;
  --color-social-amazon: <%- social['amazon-light'] %>;
  --color-social-zendesk: <%- social['zendesk-light'] %>;

  /* AlignUI Overlay Colors */
  --color-overlay-gray: <%- overlay['gray-light'] %>;
  --color-overlay-slate: <%- overlay['slate-light'] %>;
  --color-overlay: var(--color-overlay-<%- neutralColor %>);

  /* AlignUI Semantic Colors */
  --color-static-black: var(--color-neutral-950);
  --color-static-white: var(--color-neutral-0);
  
  --color-bg-strong-950: var(--color-neutral-950);
  --color-bg-surface-800: var(--color-neutral-800);
  --color-bg-sub-300: var(--color-neutral-300);
  --color-bg-soft-200: var(--color-neutral-200);
  --color-bg-weak-50: var(--color-neutral-50);
  --color-bg-white-0: var(--color-neutral-0);

  --color-text-strong-950: var(--color-neutral-950);
  --color-text-sub-600: var(--color-neutral-600);
  --color-text-soft-400: var(--color-neutral-400);
  --color-text-disabled-300: var(--color-neutral-300);
  --color-text-white-0: var(--color-neutral-0);

  --color-stroke-strong-950: var(--color-neutral-950);
  --color-stroke-sub-300: var(--color-neutral-300);
  --color-stroke-soft-200: var(--color-neutral-200);
  --color-stroke-white-0: var(--color-neutral-0);

  --color-faded-dark: var(--color-neutral-800);
  --color-faded-base: var(--color-neutral-500);
  --color-faded-light: var(--color-neutral-200);
  --color-faded-lighter: var(--color-neutral-100);

  --color-information-dark: var(--color-blue-950);
  --color-information-base: var(--color-blue-500);
  --color-information-light: var(--color-blue-200);
  --color-information-lighter: var(--color-blue-50);

  --color-warning-dark: var(--color-orange-950);
  --color-warning-base: var(--color-orange-500);
  --color-warning-light: var(--color-orange-200);
  --color-warning-lighter: var(--color-orange-50);

  --color-error-dark: var(--color-red-950);
  --color-error-base: var(--color-red-500);
  --color-error-light: var(--color-red-200);
  --color-error-lighter: var(--color-red-50);

  --color-success-dark: var(--color-green-950);
  --color-success-base: var(--color-green-500);
  --color-success-light: var(--color-green-200);
  --color-success-lighter: var(--color-green-50);

  --color-away-dark: var(--color-yellow-950);
  --color-away-base: var(--color-yellow-500);
  --color-away-light: var(--color-yellow-200);
  --color-away-lighter: var(--color-yellow-50);

  --color-feature-dark: var(--color-purple-950);
  --color-feature-base: var(--color-purple-500);
  --color-feature-light: var(--color-purple-200);
  --color-feature-lighter: var(--color-purple-50);

  --color-verified-dark: var(--color-sky-950);
  --color-verified-base: var(--color-sky-500);
  --color-verified-light: var(--color-sky-200);
  --color-verified-lighter: var(--color-sky-50);

  --color-highlighted-dark: var(--color-pink-950);
  --color-highlighted-base: var(--color-pink-500);
  --color-highlighted-light: var(--color-pink-200);
  --color-highlighted-lighter: var(--color-pink-50);

  --color-stable-dark: var(--color-teal-950);
  --color-stable-base: var(--color-teal-500);
  --color-stable-light: var(--color-teal-200);
  --color-stable-lighter: var(--color-teal-50);

  /* AlignUI Typography System - Dynamic from tokens.ts */
  <% Object.entries(JSON.parse(texts)).forEach(([key, value]) => { %>
  --font-size-<%- key %>: <%- Array.isArray(value) ? value[0] : value %>;
  <% if (Array.isArray(value) && value[1] && typeof value[1] === 'object') { %>--line-height-<%- key %>: <%- value[1].lineHeight %>;
  <% if (value[1].letterSpacing) { %>--letter-spacing-<%- key %>: <%- value[1].letterSpacing %>;<% } %>
  <% if (value[1].fontWeight) { %>--font-weight-<%- key %>: <%- value[1].fontWeight %>;<% } %>
  <% } else if (Array.isArray(value) && value[1]) { %>--line-height-<%- key %>: <%- value[1] %>;<% } %>
  <% }); %>

  /* AlignUI Shadow System - Dynamic from tokens.ts */
  <% Object.entries(JSON.parse(shadows)).forEach(([key, value]) => { %>
  --shadow-<%- key %>: <%- Array.isArray(value) ? value.join(', ') : value %>;
  <% }); %>

  /* AlignUI Border Radius System - Dynamic from tokens.ts */
  <% Object.entries(JSON.parse(borderRadii)).forEach(([key, value]) => { %>
  --radius-<%- key %>: <%- value %>;
  <% }); %>

  /* AlignUI Animation System - Dynamic from tokens.ts */
  <% Object.entries(JSON.parse(animations)).forEach(([key, value]) => { %>
  --animate-<%- key %>: <%- value %>;
  <% }); %>
}

/* Dark Mode Support - Tailwind v4.1 CSS Variables */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-strong-950: var(--color-neutral-0);
    --color-bg-surface-800: var(--color-neutral-200);
    --color-bg-sub-300: var(--color-neutral-600);
    --color-bg-soft-200: var(--color-neutral-700);
    --color-bg-weak-50: var(--color-neutral-900);
    --color-bg-white-0: var(--color-neutral-950);

    --color-text-strong-950: var(--color-neutral-0);
    --color-text-sub-600: var(--color-neutral-400);
    --color-text-soft-400: var(--color-neutral-500);
    --color-text-disabled-300: var(--color-neutral-600);
    --color-text-white-0: var(--color-neutral-950);

    --color-stroke-strong-950: var(--color-neutral-0);
    --color-stroke-sub-300: var(--color-neutral-600);
    --color-stroke-soft-200: var(--color-neutral-700);
    --color-stroke-white-0: var(--color-neutral-950);

    --color-faded-dark: var(--color-neutral-300);
    --color-faded-base: var(--color-neutral-500);
    --color-faded-light: var(--color-neutral-alpha-24);
    --color-faded-lighter: var(--color-neutral-alpha-16);

    --color-information-dark: var(--color-blue-400);
    --color-information-base: var(--color-blue-500);
    --color-information-light: var(--color-blue-alpha-24);
    --color-information-lighter: var(--color-blue-alpha-16);

    --color-warning-dark: var(--color-orange-400);
    --color-warning-base: var(--color-orange-600);
    --color-warning-light: var(--color-orange-alpha-24);
    --color-warning-lighter: var(--color-orange-alpha-16);

    --color-error-dark: var(--color-red-400);
    --color-error-base: var(--color-red-600);
    --color-error-light: var(--color-red-alpha-24);
    --color-error-lighter: var(--color-red-alpha-16);

    --color-success-dark: var(--color-green-400);
    --color-success-base: var(--color-green-600);
    --color-success-light: var(--color-green-alpha-24);
    --color-success-lighter: var(--color-green-alpha-16);

    --color-away-dark: var(--color-yellow-400);
    --color-away-base: var(--color-yellow-600);
    --color-away-light: var(--color-yellow-alpha-24);
    --color-away-lighter: var(--color-yellow-alpha-16);

    --color-feature-dark: var(--color-purple-400);
    --color-feature-base: var(--color-purple-500);
    --color-feature-light: var(--color-purple-alpha-24);
    --color-feature-lighter: var(--color-purple-alpha-16);

    --color-verified-dark: var(--color-sky-400);
    --color-verified-base: var(--color-sky-600);
    --color-verified-light: var(--color-sky-alpha-24);
    --color-verified-lighter: var(--color-sky-alpha-16);

    --color-highlighted-dark: var(--color-pink-400);
    --color-highlighted-base: var(--color-pink-600);
    --color-highlighted-light: var(--color-pink-alpha-24);
    --color-highlighted-lighter: var(--color-pink-alpha-16);

    --color-stable-dark: var(--color-teal-400);
    --color-stable-base: var(--color-teal-600);
    --color-stable-light: var(--color-teal-alpha-24);
    --color-stable-lighter: var(--color-teal-alpha-16);

    --color-overlay-gray: <%- overlay['gray-dark'] %>;
    --color-overlay-slate: <%- overlay['slate-dark'] %>;
    --color-overlay: var(--color-overlay-<%- neutralColor %>);
    
    --color-social-apple: <%- social['apple-dark'] %>;
    --color-social-twitter: <%- social['twitter-dark'] %>;
    --color-social-github: <%- social['github-dark'] %>;
    --color-social-notion: <%- social['notion-dark'] %>;
    --color-social-tidal: <%- social['tidal-dark'] %>;
    --color-social-amazon: <%- social['amazon-dark'] %>;
    --color-social-zendesk: <%- social['zendesk-dark'] %>;
  }
}

/* Class-based Dark Mode Support */
  .dark {
  --color-bg-strong-950: var(--color-neutral-0);
  --color-bg-surface-800: var(--color-neutral-200);
  --color-bg-sub-300: var(--color-neutral-600);
  --color-bg-soft-200: var(--color-neutral-700);
  --color-bg-weak-50: var(--color-neutral-900);
  --color-bg-white-0: var(--color-neutral-950);

  --color-text-strong-950: var(--color-neutral-0);
  --color-text-sub-600: var(--color-neutral-400);
  --color-text-soft-400: var(--color-neutral-500);
  --color-text-disabled-300: var(--color-neutral-600);
  --color-text-white-0: var(--color-neutral-950);

  --color-stroke-strong-950: var(--color-neutral-0);
  --color-stroke-sub-300: var(--color-neutral-600);
  --color-stroke-soft-200: var(--color-neutral-700);
  --color-stroke-white-0: var(--color-neutral-950);

  --color-faded-dark: var(--color-neutral-300);
  --color-faded-base: var(--color-neutral-500);
  --color-faded-light: var(--color-neutral-alpha-24);
  --color-faded-lighter: var(--color-neutral-alpha-16);

  --color-information-dark: var(--color-blue-400);
  --color-information-base: var(--color-blue-500);
  --color-information-light: var(--color-blue-alpha-24);
  --color-information-lighter: var(--color-blue-alpha-16);

  --color-warning-dark: var(--color-orange-400);
  --color-warning-base: var(--color-orange-600);
  --color-warning-light: var(--color-orange-alpha-24);
  --color-warning-lighter: var(--color-orange-alpha-16);

  --color-error-dark: var(--color-red-400);
  --color-error-base: var(--color-red-600);
  --color-error-light: var(--color-red-alpha-24);
  --color-error-lighter: var(--color-red-alpha-16);

  --color-success-dark: var(--color-green-400);
  --color-success-base: var(--color-green-600);
  --color-success-light: var(--color-green-alpha-24);
  --color-success-lighter: var(--color-green-alpha-16);

  --color-away-dark: var(--color-yellow-400);
  --color-away-base: var(--color-yellow-600);
  --color-away-light: var(--color-yellow-alpha-24);
  --color-away-lighter: var(--color-yellow-alpha-16);

  --color-feature-dark: var(--color-purple-400);
  --color-feature-base: var(--color-purple-500);
  --color-feature-light: var(--color-purple-alpha-24);
  --color-feature-lighter: var(--color-purple-alpha-16);

  --color-verified-dark: var(--color-sky-400);
  --color-verified-base: var(--color-sky-600);
  --color-verified-light: var(--color-sky-alpha-24);
  --color-verified-lighter: var(--color-sky-alpha-16);

  --color-highlighted-dark: var(--color-pink-400);
  --color-highlighted-base: var(--color-pink-600);
  --color-highlighted-light: var(--color-pink-alpha-24);
  --color-highlighted-lighter: var(--color-pink-alpha-16);

  --color-stable-dark: var(--color-teal-400);
  --color-stable-base: var(--color-teal-600);
  --color-stable-light: var(--color-teal-alpha-24);
  --color-stable-lighter: var(--color-teal-alpha-16);

  --color-overlay-gray: <%- overlay['gray-dark'] %>;
  --color-overlay-slate: <%- overlay['slate-dark'] %>;
  --color-overlay: var(--color-overlay-<%- neutralColor %>);
  
  --color-social-apple: <%- social['apple-dark'] %>;
  --color-social-twitter: <%- social['twitter-dark'] %>;
  --color-social-github: <%- social['github-dark'] %>;
  --color-social-notion: <%- social['notion-dark'] %>;
  --color-social-tidal: <%- social['tidal-dark'] %>;
  --color-social-amazon: <%- social['amazon-dark'] %>;
  --color-social-zendesk: <%- social['zendesk-dark'] %>;
}

/* Keyframe Animations - AlignUI System */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

@keyframes accordion-down {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

/* Custom styles */
.remixicon path {
  transform: scale(0.8996);
  transform-origin: center;
}
`;
