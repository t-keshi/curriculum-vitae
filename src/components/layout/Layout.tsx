import { Container, Box } from '@chakra-ui/react';
import React from 'react';
import { PageTitle } from '../ui/PageTitle';
import { Header } from './Header';

interface Props {
  pageTitle?: string;
  isWide?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, pageTitle, isWide }) => (
  <Box position="relative" sx={{ overflow: 'scroll', width: '100vw' }}>
    <Header />
    <Container
      as="main"
      maxW={isWide ? 'container.lg' : 'container.md'}
      px={{ base: '1rem', md: 0 }}
      pt={16}
      pb={12}
      margin="auto"
    >
      {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
      {children}
    </Container>
  </Box>
);
