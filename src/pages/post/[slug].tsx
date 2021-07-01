import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { PostPage } from '../../containers/PostPage';
import { PostApi } from '../../data/PostsApi';
import { IPost } from '../../models/IPost';
import { markdownToHtml } from '../../utils/markdownToHtml';

export interface PostPageProps {
  post: IPost;
}

export default function Post({ post }: PostPageProps) {
  return (
    <>
      <Head>
        <title>Blog Next - {post.title}</title>
        <meta name="description" content={`Post ${post.title}`} />
      </Head>
      <PostPage post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postApi = new PostApi();
  const postsCount = await postApi.getCountPosts();
  const posts = await postApi.getPostsQuery(`_limit=${postsCount}`);

  return {
    paths: posts.map((post) => {
      return {
        params: { slug: post.slug },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postApi = new PostApi();
  const post = await postApi.getPost(context.params.slug);

  post.content = await markdownToHtml(post.content);

  return {
    props: { post },
  };
};
