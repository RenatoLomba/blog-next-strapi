import { IFormat } from './IFormat';
import { DefaultID } from './IPost';

export interface IPostCover extends IFormat {
  id: DefaultID;
  alternativeText: string;
  caption: string;
  created_at: Date;
  updated_at: Date;
  formats: {
    large: IFormat;
    small: IFormat;
    medium: IFormat;
    thumbnail: IFormat;
  };
  provider: string;
}
