import React from 'react';
import styled, { css } from 'styled-components';

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverImage = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

interface CoverProps {
  url: string;
  altText: string;
}

export function Cover({ url, altText }: CoverProps) {
  return (
    <CoverContainer>
      <CoverImage src={url} alt={altText} />
    </CoverContainer>
  );
}
