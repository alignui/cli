import * as prettier from 'prettier';

export const prettierFormat = (src: string) =>
  prettier.format(src, {
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 2,
    semi: true,
    parser: 'typescript',
  });
