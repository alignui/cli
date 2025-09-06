import { converter, formatHsl, formatRgb, type Color } from 'culori';

const rgb = converter('rgb');
const hsl = converter('hsl');
const oklch = converter('oklch');
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

export function formatOklchColor(hex: string): string {
  const color = oklch(hex) as Color;

  if (!color) return hex;

  // OKLCH values: l (lightness), c (chroma), h (hue)
  const l = color.l !== undefined ? (color.l * 100).toFixed(2) + '%' : '0%';
  const c = color.c !== undefined ? color.c.toFixed(4) : '0';
  const h = color.h !== undefined ? color.h.toFixed(2) : '0';

  if (color.alpha !== undefined && color.alpha !== 1) {
    return `${l} ${c} ${h} / ${percentageFormat(color.alpha)}`;
  }

  return `${l} ${c} ${h}`;
}
