export interface IBooks {
  id: number;
  title: string;
  subjects: any;
  authors: IAuthor[];
  translators: any;
  bookshelves: any;
  languages: any;
  copyright: boolean;
  media_type: string;
  formats: any;
  download_count: number;
}
export interface IAuthor {
  name: string;
  birth_year: number;
  death_year: number;
}
export interface IBooksNew {
  results: IBooks[];
  count: number;
  next: string;
  previous: null;
}
