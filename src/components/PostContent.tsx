import React from 'react';
import styled, { css } from 'styled-components';

export const PostContainer = styled.article`
  img {
    max-width: 100%;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }
  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.darkDray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
    `}
  }
`;

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return <PostContainer dangerouslySetInnerHTML={{ __html: content }} />;
}
