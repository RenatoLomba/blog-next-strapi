import React from 'react';
import { Comments } from '../components/Comments';
import { Cover } from '../components/Cover';
import { Heading } from '../components/Heading';
import { PostContent } from '../components/PostContent';
import { PostDetails } from '../components/PostDetails';
import { PostPageProps } from '../pages/post/[slug]';

export function PostPage({ post }: PostPageProps) {
  const url = post.cover.formats.large
    ? post.cover.formats.large.url
    : post.cover.formats.small.url;

  return (
    <div>
      <Heading title={post.title} />
      <Cover url={url} altText={post.title} />
      <PostDetails
        author={post.author.name}
        category={post.category.name}
        date={post.created_at}
      />
      <PostContent content={post.content} />
      <Comments slug={post.slug} title={post.title} />
    </div>
  );
}
