import { converter, formatHsl, formatRgb, type Color } from 'culori';

const rgb = converter('rgb');
const hsl = converter('hsl');
const percentageFormat = new Intl.NumberFormat('en-US', { style: 'percent' })
  .format;

export function formatHslColor(hex: string): string {
  const color = hsl(hex) as Color;
  const formattedCssColor = formatHsl(color);
  let [h, s, l]: any[] = formattedCssColor
    .replace('hsla(', '')
    .replace('hsl(', '')
    .replace(')', '')
    .split(', ');

  if (color?.alpha) {
    return `${h} ${s} ${l} / ${percentageFormat(color.alpha)}`;
  }
  return `${h} ${s} ${l}`;
}

export function formatRgbColor(hex: string): string {
  const color = rgb(hex) as Color;
  const formattedCssColor = formatRgb(color);
  let [r, g, b]: any[] = formattedCssColor
    .replace('rgba(', '')
    .replace('rgb(', '')
    .replace(')', '')
    .split(', ');

  if (color?.alpha) {
    return `${r} ${g} ${b} / ${percentageFormat(color.alpha)}`;
  }
  return `${r} ${g} ${b}`;
}
