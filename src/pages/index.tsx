import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { HomePage } from '../containers/HomePage';
import { IPostApi } from '../data/IPostApi';
import { PostApi } from '../data/PostsApi';
import { IPost } from '../models/IPost';
import styled from 'styled-components';

const SeeAllPages = styled.div`
  text-align: center;
`;

export interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Blog Next - Home</title>
        <meta name="description" content="Blog com NextJs e Strapi" />
      </Head>
      <HomePage posts={posts} />
      <SeeAllPages>
        <Link href={`/post/page/1`}>
          <a>Ver todas as páginas</a>
        </Link>
      </SeeAllPages>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postApi: IPostApi = new PostApi();
  const posts = await postApi.getPosts();
  return {
    props: { posts },
    revalidate: 600,
  };
};
