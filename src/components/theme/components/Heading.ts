import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
  variants: {
    h1: {
      fontSize: ['3xl', '4xl', '4xl', '4xl'],
      lineHeight: 1.5,
    },
    h2: {
      fontSize: ['2xl', '3xl', '3xl', '3xl'],
      lineHeight: 1.5,
    },
    h3: {
      fontSize: ['xl', '2xl', '2xl', '2xl'],
      lineHeight: 1.5,
    },
    h4: {
      fontSize: ['lg', 'xl', 'xl', 'xl'],
      lineHeight: 1.5,
    },
  },
};
