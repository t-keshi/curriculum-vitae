import React from 'react';
import '@fontsource/noto-sans-jp';
import { MDXThemeProvider } from './src/container/MDXThemeProvider';

export const wrapRootElement = ({ element }) => {
  return <MDXThemeProvider>{element}</MDXThemeProvider>;
};
