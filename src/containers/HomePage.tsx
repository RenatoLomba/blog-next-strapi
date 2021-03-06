import React from 'react';
import { HomeProps } from '../pages';
import styled from 'styled-components';
import { PostCard } from '../components/PostCard';
import { IPostPagination } from '../models/IPostPagination';
import { Pagination } from '../components/Pagination';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacings.large};
`;

const Category = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.large} 0;
`;

interface HomePageProps extends HomeProps {
  category?: string;
  pagination?: IPostPagination;
}

export function HomePage({ posts, category, pagination }: HomePageProps) {
  return (
    <>
      {category && <Category>Category: {category}</Category>}
      <Container>
        {posts.map((post) => (
          <PostCard
            cover={post.cover.formats.small.url}
            slug={post.slug}
            title={post.title}
            key={post.slug}
          />
        ))}
      </Container>
      <Pagination {...pagination} />
    </>
  );
}
