import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { formatDate } from '../utils/formatDate';

const PostDate = styled.span``;

const DetailsContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.small} 0;
    font-style: italic;
  `}
`;

interface PostDetailsProps {
  date: Date;
  author: string;
  category: string;
}

export function PostDetails({ date, author, category }: PostDetailsProps) {
  const formattedDate = formatDate(date, 'PPP');
  const authorDesc = author.split(' ');

  return (
    <DetailsContainer>
      Publicado em <PostDate>{formattedDate}</PostDate> por{' '}
      {authorDesc[1] ? `${authorDesc[1]}, ${authorDesc[0]}` : authorDesc[0]}
      &nbsp;|{' '}
      <Link href={`/categories/${category.toLowerCase()}`}>
        <a>{category}</a>
      </Link>
    </DetailsContainer>
  );
}
