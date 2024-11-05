<p align="center">
  <a href="https://alignui.com">
    <img src="./logo.svg" height="96">
    <h3 align="center">AlignUI Design System</h3>
  </a>
  <p align="center">The Design System You Need</p>
</p>

[Join the AlignUI Community](https://discord.gg/alignui)

## Introduction

A CLI for adding AlignUI's Tailwind styles to your project.

## Usage

Use the `tailwind` command to initialize tailwind for your project. You need to do this in your project directory and make sure you have installed Tailwind CSS.

> [!CAUTION]
> This will overwrite your CSS and `tailwind.config` files.

```bash
npx @alignui/cli tailwind
```

This command will detect if you're using TypeScript, install the necessary packages, ask for your preferred primary color and color format, and prompt you to choose a prefix for AlignUI's classes if you’d like.

> [!NOTE]  
> A CSS file with Tailwind directives and a `tailwind.config` file must exist in your project.

## License

[MIT](./LICENSE)
