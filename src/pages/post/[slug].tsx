import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { PostPage } from '../../containers/PostPage';
import { PostApi } from '../../data/PostsApi';
import { IPost } from '../../models/IPost';
import { markdownToHtml } from '../../utils/markdownToHtml';

export interface PostPageProps {
  post: IPost;
}

export default function Post({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>Página em carregamento, por favor aguarde alguns instantes...</div>
    );
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postApi = new PostApi();
  const post = await postApi.getPost(context.params.slug);

  if (post) post.content = await markdownToHtml(post.content);

  return {
    props: { post },
    revalidate: 600,
  };
};
