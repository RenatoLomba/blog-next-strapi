import { IPost } from '../models/IPost';

export interface IPostApi {
  getPosts(): Promise<IPost[]>;
  getCountPosts(): Promise<number>;
  getPostsQuery(query?: string): Promise<IPost[]>;
  getPost(slug: string | string[]): Promise<IPost>;
}
