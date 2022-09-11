import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from './Link';

interface Props {
  hasNextPage: boolean;
  nextPagePath: string;
  hasPrevPage: boolean;
  prevPagePath: string;
}

export const Pagination: React.FC<Props> = ({
  hasNextPage,
  nextPagePath,
  hasPrevPage,
  prevPagePath,
}) => (
  <Flex justify="space-between">
    {hasPrevPage ? <Link to={prevPagePath}>← 前のページ</Link> : <div />}
    {hasNextPage ? <Link to={nextPagePath}>次のページ →</Link> : <div />}
  </Flex>
);
