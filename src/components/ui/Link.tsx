import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const Link = <TState extends {}>({
  children,
  colorScheme,
  isExternal,
  size,
  variant,
  sx,
  as,
  ...gatsbyLinkProps
}: Omit<GatsbyLinkProps<TState> & ChakraLinkProps, 'to'> & {
  to?: GatsbyLinkProps<TState>['to'];
}): React.ReactElement => {
  const commonProps = {
    display: 'inline',
    boxShadow: 'none',
    _hover: { color: 'primary.main', textDecoration: 'underline' },
    _focus: { boxShadow: 'none' },
  } as const;

  if (!gatsbyLinkProps.to) {
    return (
      <ChakraLink
        as={as}
        colorScheme={colorScheme}
        isExternal={isExternal}
        size={size}
        variant={variant}
        sx={sx}
        {...commonProps}
        {...gatsbyLinkProps}
      >
        {children}
      </ChakraLink>
    );
  }

  return (
    <ChakraLink
      as={GatsbyLink}
      colorScheme={colorScheme}
      isExternal={isExternal}
      size={size}
      variant={variant}
      sx={sx}
      to={gatsbyLinkProps.to}
      {...commonProps}
      {...gatsbyLinkProps}
    >
      {children}
    </ChakraLink>
  );
};
