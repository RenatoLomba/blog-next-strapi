import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { HomePage } from '../../containers/HomePage';
import { IPostApi } from '../../data/IPostApi';
import { PostApi } from '../../data/PostsApi';
import { IPost } from '../../models/IPost';

export interface CategorieProps {
  posts: IPost[];
  category: string;
}

export default function Category({ posts, category }: CategorieProps) {
  return (
    <>
      <Head>
        <title>Blog Next - {category}</title>
        <meta name="description" content={`Blog - ${category}`} />
      </Head>
      <HomePage
        category={typeof category === 'string' ? category : ''}
        posts={posts}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const postApi: IPostApi = new PostApi();

  const { category } = ctx.params;
  const urlParam = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${category}`;
  const posts = await postApi.getPostsQuery(urlParam);

  return {
    props: { posts, category },
  };
};
