import React from 'react';
import { HomeProps } from '../pages';
import styled from 'styled-components';
import { PostCard } from '../components/PostCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
`;

export function HomePage({ posts }: HomeProps) {
  // console.log(posts);
  // console.log(posts[5].cover.formats);
  return (
    <Container>
      {posts.map((post) => (
        // <h2 key={post.slug}>{post.title}</h2>
        <PostCard
          cover={post.cover.formats.small.url}
          slug={post.slug}
          title={post.title}
          key={post.slug}
        />
      ))}
    </Container>
  );
}
