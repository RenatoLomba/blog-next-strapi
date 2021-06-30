import { DefaultID } from './IPost';

export interface IPostCategory {
  id: DefaultID;
  name: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}
