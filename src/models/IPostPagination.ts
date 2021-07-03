export interface IPostPagination {
  nextPage: number;
  previousPage: number;
  totalOfPages: number;
  postsPerPage: number;
  category?: string;
}
