import React from 'react';
import { PostCard, PostCardProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    cover:
      'https://blog-geek-midia.s3.amazonaws.com/wp-content/uploads/2020/12/02162715/typescript-tutorial.jpeg',
    slug: 'slug-do-post',
    title: 'Título do Post',
  } as PostCardProps,
} as Meta;

export const TypescriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

export const JavascriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);
JavascriptCover.args = {
  cover: '/images/wallpaper_linkedin.jpg',
};
