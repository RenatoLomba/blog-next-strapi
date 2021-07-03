import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Error from 'next/error';
import { HomePage } from '../../../containers/HomePage';
import { IPostApi } from '../../../data/IPostApi';
import { PostApi } from '../../../data/PostsApi';
import { IPost } from '../../../models/IPost';
import { useRouter } from 'next/router';
import { IPostPagination } from '../../../models/IPostPagination';

export interface PageProps {
  posts: IPost[];
  category?: string;
  pagination: IPostPagination;
}

export default function Page({ posts, pagination, category }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página está carregando...</div>;
  }

  if (posts.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          Blog Next - Posts{' '}
          {router.query.param[0] === '0' ? 1 : router.query.param[0]}{' '}
          {category && `- ${category}`}
        </title>
        <meta name="description" content="Posts 1 do Blog" />
      </Head>
      <HomePage posts={posts} category={category} pagination={pagination} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postApi: IPostApi = new PostApi();
  const page =
    context.params.param[0] === '0' ? 1 : Number(context.params.param[0]);
  const category = context.params.param[1] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;
  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const url = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`;
  const nextPage = page + 1;
  const previousPage = page - 1;
  const totalOfPages = (await postApi.getCountPosts(category)) / postsPerPage;

  const posts = await postApi.getPostsQuery(url);
  const pagination: IPostPagination = {
    nextPage,
    postsPerPage,
    previousPage,
    totalOfPages,
    category,
  };

  return {
    props: { posts, category, pagination },
    revalidate: 600,
  };
};
