import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

export interface PostCardProps {
  title: string;
  slug: string;
  cover: string;
}

const PostCardContainer = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};

  img {
    width: 100%;
    display: block;
  }
`;

const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkDray};
      cursor: pointer;
    }
  `}
`;

export function PostCard({ slug, cover, title }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </PostCardContainer>
  );
}
