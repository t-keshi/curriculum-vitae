/* eslint-disable react/no-unstable-nested-components */
import {
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  Thead,
  Divider,
  Text,
  Box,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Link } from '../components/ui/Link';

type Props = {
  children: React.ReactNode;
};

export const MDXThemeProvider: React.FC<Props> = ({ children }) => (
  <MDXProvider
    components={{
      h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h1" variant="h1" mt={12} mb={4} {...props} />
      ),
      h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h2" variant="h2" mt={12} mb={4} {...props} />
      ),
      h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h3" variant="h3" mt={12} mb={4} {...props} />
      ),
      h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h4" variant="h4" mt={12} mb={4} {...props} />
      ),
      h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h5" fontSize="lg" mt={12} mb={4} {...props} />
      ),
      h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Heading as="h6" fontSize="md" mt={12} mb={4} {...props} />
      ),
      p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <Text as="p" variant="body1" my={8} {...props} />
      ),
      blockquote: ({
        children: innerChildren,
        ...rest
      }: React.BlockquoteHTMLAttributes<HTMLElement>) => (
        <Box as="figure" bg="gray.50" px={{ base: 6, md: 8 }} py={2} my={8} {...rest}>
          <Text as="blockquote" variant="body1" color="grey.900">
            {innerChildren}
          </Text>
        </Box>
      ),
      ul: ({ children: innerChildren, ...rest }: React.HTMLAttributes<HTMLUListElement>) => (
        <UnorderedList spacing={3} pl={2} my={4} {...rest}>
          {innerChildren}
        </UnorderedList>
      ),
      ol: ({ children: innerChildren, ...rest }: React.HTMLAttributes<HTMLOListElement>) => (
        <OrderedList spacing={3} pl={2} my={4} {...rest}>
          {innerChildren}
        </OrderedList>
      ),
      li: (props: React.HTMLAttributes<HTMLLIElement>) => <ListItem {...props} />,
      table: (props: React.TableHTMLAttributes<HTMLTableElement>) => <Table {...props} />,
      tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <Tr {...props} />,
      th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => <Th {...props} />,
      td: (props: React.HTMLAttributes<HTMLTableCellElement>) => <Td {...props} />,
      thead: (props: React.ThHTMLAttributes<HTMLTableSectionElement>) => <Thead {...props} />,
      tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <Tbody {...props} />,
      em: (props: React.HTMLAttributes<HTMLElement>) => (
        <Text as="em" fontSize="lg" sx={{ lineHeight: 2, fontWeight: 'bold' }} {...props} />
      ),
      strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <Text as="strong" fontSize="lg" sx={{ fontWeight: 'bold' }}>
          {props.children}
        </Text>
      ),
      hr: (props: React.HTMLAttributes<HTMLHRElement>) => <Divider>{props.children}</Divider>,
      a: ({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link color="primary.main" to={href} {...rest} />
      ),
      figcaption: (props: React.HTMLAttributes<HTMLElement>) => (
        <Text as="figcaption" fontSize="sm" textAlign="right" {...props} />
      ),
      // eslint-disable-next-line react/jsx-props-no-spreading
      div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
      figure: ({ children: innerChildren, ...rest }: React.HTMLAttributes<HTMLElement>) => (
        <Box as="figure" bg="gray.50" px={{ base: 6, md: 8 }} py={2} my={8} {...rest}>
          <Text as="blockquote" variant="body1" color="grey.900">
            <Text as="p" variant="body1" my={8}>
              {innerChildren}
            </Text>
          </Text>
        </Box>
      ),
    }}
  >
    {children}
  </MDXProvider>
);
