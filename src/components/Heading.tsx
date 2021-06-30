import React from 'react';
import styled, { css } from 'styled-components';

const HeadingContainer = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
  `}
`;

interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return <HeadingContainer>{title}</HeadingContainer>;
}
