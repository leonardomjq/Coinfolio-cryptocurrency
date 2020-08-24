import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      200: '#e2e8f0',
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
    blue: {
      ...theme.colors.blue,
      500: '#0068ff',
    },
    pink: {
      ...theme.colors.pink,
      400: '#ff9cf9',
      700: '#f50a81',
    },
    purple: {
      ...theme.colors.purple,
      500: '#9d09db',
    },
  },
};

export default customTheme;
