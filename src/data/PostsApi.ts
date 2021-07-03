import { AppConfig } from '../config/AppConfig';
import { IPost } from '../models/IPost';
import { getJson } from '../utils/getJson';
import { IPostApi } from './IPostApi';

export class PostApi implements IPostApi {
  async getPost(slug: string | string[]): Promise<IPost> {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${AppConfig.POSTS_URL}?slug=${slugString}`;

    if (!url) return null;

    const posts = await getJson<IPost[]>(url);
    return posts[0];
  }

  async getPostsQuery(query = ''): Promise<IPost[]> {
    return getJson(`${AppConfig.POSTS_URL}?${query}`);
  }

  async getCountPosts(category?: string): Promise<number> {
    const categoryQuery = category ? `category.name_contains=${category}` : '';
    return getJson(`${AppConfig.POSTS_URL}/count?${categoryQuery}`);
  }

  async getPosts(): Promise<IPost[]> {
    return getJson(`${AppConfig.POSTS_URL}?_sort=id:desc&_start=0&_limit=30`);
  }
}
