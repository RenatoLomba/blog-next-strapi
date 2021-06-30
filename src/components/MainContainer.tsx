import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface MainContainerProps {
  children: ReactNode;
}

const MainContainerStyled = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;

export function MainContainer({ children }: MainContainerProps) {
  return <MainContainerStyled>{children}</MainContainerStyled>;
}
