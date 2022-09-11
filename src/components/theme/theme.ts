import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button, Heading, Input, Link, Text } from './components';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Noto Sans JP, sans-serif',
        display: 'inline',
      },
    },
  },
  fonts: {
    heading: 'Noto Sans JP, sans-serif',
    body: 'Noto Sans JP, sans-serif',
  },
  colors,
  components: {
    Button,
    Heading,
    TextField: Input,
    Link,
    Text,
  },
} as const);
