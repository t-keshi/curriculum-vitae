import { ComponentStyleConfig, theme as defaultTheme } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    boxShadow: 'none',
    _focus: { boxShadow: 'none' },
  },
  variants: {
    round: (props) => ({
      ...defaultTheme.components.Button.variants.outline(props),
      bg: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      rounded: 'full',
      px: 8,
      py: { base: 4, md: 6 },
      letterSpacing: '0.1em',
    }),
  },
};
