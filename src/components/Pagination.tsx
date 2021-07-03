import React from 'react';
import { IPostPagination } from '../models/IPostPagination';
import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;

const PreviousLink = styled.div``;
const NextLink = styled.div``;

export function Pagination({
  nextPage,
  previousPage,
  totalOfPages,
  category,
}: IPostPagination) {
  const nextLink = `/post/page/${nextPage}/${category || ''}`;
  const previousLink = `/post/page/${previousPage || 1}/${category || ''}`;
  const hasNextPage = nextPage <= totalOfPages;
  const hasPreviousPage = previousPage >= 1;

  return (
    <PaginationContainer>
      <PreviousLink>
        {hasPreviousPage && (
          <Link href={previousLink}>
            <a>Previous</a>
          </Link>
        )}
      </PreviousLink>

      <NextLink>
        {hasNextPage && (
          <Link href={nextLink}>
            <a>Next</a>
          </Link>
        )}
      </NextLink>
    </PaginationContainer>
  );
}
