import { Heading, Divider, VStack, Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: string;
}

export const PageTitle: React.VFC<Props> = ({ children }) => (
  <VStack my={12}>
    <Heading as="h1" variant="h1" textAlign="center" mb={4} sx={{ whiteSpace: 'pre-wrap' }}>
      {children.replace('\\n', '\n')}
    </Heading>
    <Box mt={2} width={4}>
      <Divider sx={{ borderColor: 'gray.800', borderStyle: 'solid' }} />
    </Box>
  </VStack>
);
