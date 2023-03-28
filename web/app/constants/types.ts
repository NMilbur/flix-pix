export type MovieData = {
  Search?: {
    imdbID: string;
    Poster: string;
    Title: string;
  }[];
};

export interface CommonProps {
  searchHandler?: (value: MovieData) => void;
  setToggle?: (value: boolean) => void;
  viewToggle?: boolean;
}
