import React from 'react';
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';
import { AppConfig } from '../config/AppConfig';

const CommentsContainer = styled.section`
  margin: 5rem 0;
`;

interface CommentProps {
  slug: string;
  title: string;
}

export function Comments({ slug, title }: CommentProps) {
  return (
    <CommentsContainer>
      <DiscussionEmbed
        shortname="myblognext-1"
        config={{
          url: `${AppConfig.SITE_URL}/post/${slug}`,
          identifier: slug,
          title,
          language: 'pt_BR',
        }}
      />
    </CommentsContainer>
  );
}
