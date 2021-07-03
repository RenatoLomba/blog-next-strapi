import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { AppConfig } from '../../config/AppConfig';

const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    text-align: center;
    padding: ${theme.spacings.medium};

    a {
      color: ${theme.colors.white};
    }
  `}
`;

const firstName = AppConfig.SITE_NAME.split(' ')[0];

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>{firstName}&apos;s Blog</a>
      </Link>
    </HeaderContainer>
  );
}
