import React from 'react';
import styled, { css } from 'styled-components';
import { AppConfig } from '../config/AppConfig';

const FooterContainer = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    text-align: center;
    margin: ${theme.spacings.medium};
  `}
`;

export function Footer() {
  return (
    <FooterContainer>Page created by {AppConfig.SITE_NAME}</FooterContainer>
  );
}
