<p align="center">
  <a href="https://alignui.com">
    <img src="./logo.svg" height="96">
    <h3 align="center">AlignUI Design System</h3>
  </a>
  <p align="center">The Design System You Need</p>
</p>

[Join the AlignUI Community](https://discord.gg/alignui)

## Introduction

A CLI for adding AlignUI's Tailwind CSS v4.1 styles to your project with CSS-first configuration.

## Usage

Use the `tailwind` command to initialize Tailwind CSS v4.1 with AlignUI design system for your project.

> [!CAUTION]
> This will overwrite your CSS and `tailwind.config` files with Tailwind v4.1 CSS-first configuration.

```bash
npx @alignui/cli tailwind
```

This command will:

- Detect if you're using TypeScript
- Install Tailwind CSS v4.1 packages (`tailwindcss@next`, `@tailwindcss/postcss@next`)
- Ask for your preferred primary color (Blue, Purple, Orange, Sky)
- Ask for your preferred neutral color (Gray, Slate)
- Ask for your preferred color format (OKLCH recommended, HEX, RGB, HSL)
- Prompt you to choose a prefix for AlignUI's classes if needed
- Generate CSS-first configuration with `@theme` directive
- Set up all AlignUI design tokens and colors

> [!NOTE]  
> A CSS file with Tailwind directives and a `tailwind.config` file must exist in your project.

## What's New in v0.0.3

- ✨ **Tailwind CSS v4.1 Support**: Full compatibility with the latest Tailwind CSS
- 🎨 **CSS-First Configuration**: Uses `@theme` directive instead of JavaScript config
- 🌈 **OKLCH Color System**: Modern color space for more vivid colors (default)
- ⚡ **Simplified Setup**: Streamlined installation process
- 🔧 **Modern CSS Features**: Support for cascade layers and advanced CSS properties

## License

[MIT](./LICENSE)
