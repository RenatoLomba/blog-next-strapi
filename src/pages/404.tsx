import React from 'react';
import styled, { css } from 'styled-components';

const ErrorMessage = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.superLarge};
    text-align: center;
  `}
`;

export default function NotFound() {
  return <ErrorMessage>Not Found</ErrorMessage>;
}
