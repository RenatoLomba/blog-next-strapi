import { IPostAuthor } from './IPostAuthor';
import { IPostCategory } from './IPostCategorty';
import { IPostCover } from './IPostCover';

export type DefaultID = number;

export interface IPost {
  id: DefaultID;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  slug: string;
  author: IPostAuthor;
  category: IPostCategory;
  cover: IPostCover;
}
