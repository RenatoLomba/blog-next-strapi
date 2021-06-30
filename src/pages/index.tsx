import React from 'react';
import { GetStaticProps } from 'next';
import { HomePage } from '../containers/HomePage';
import { IPostApi } from '../data/IPostApi';
import { PostApi } from '../data/PostsApi';
import { IPost } from '../models/IPost';

export interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const postApi: IPostApi = new PostApi();
  const posts = await postApi.getPosts();
  return {
    props: { posts },
  };
};
