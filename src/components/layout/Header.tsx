import { Box, Flex, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import { SiZenn, SiGithub, SiTwitter } from 'react-icons/si';

export const Header: React.FC = () => (
  <Box position="relative">
    <Box
      as="header"
      display="flex"
      flexShrink={0}
      width="100%"
      position="fixed"
      top={0}
      left="auto"
      right={0}
      zIndex={2}
      boxShadow="lg"
      backgroundColor="rgba(255,255,255,0.72)"
      sx={{ backdropFilter: 'blur(20px)' }}
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        w="100%"
        minH={{ base: '50px', md: '58px', lg: '64px' }}
        px={{ base: 1, md: 2 }}
        columnGap={4}
      >
        <IconButton
          variant="outline"
          aria-label="button"
          colorScheme="gray"
          icon={<SiGithub />}
          as="a"
          href="https://github.com/t-keshi"
          rel="noopener noreferrer"
          target="_blank"
        />
        <IconButton
          variant="outline"
          aria-label="button"
          colorScheme="gray"
          icon={<SiTwitter />}
          as="a"
          href="https://twitter.com/t__keshi"
          rel="noopener noreferrer"
          target="_blank"
        />
        <IconButton
          variant="outline"
          aria-label="button"
          colorScheme="gray"
          icon={<SiZenn />}
          as="a"
          href="https://zenn.dev/"
          rel="noopener noreferrer"
          target="_blank"
        />
        <Button colorScheme="primary" variant="outline" as="a" href="/all.pdf" download>
          Download PDF
        </Button>
      </Flex>
    </Box>
    <Box minH={{ base: '50px', md: '58px', lg: '64px' }} w="100vw" />
  </Box>
);
