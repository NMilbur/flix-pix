export type MovieData = {
  Search?: {
    imdbID: string;
    Poster: string;
    Title: string;
  }[];
};

export type WatchlistData = {
  imdbID: string;
  imageUrl: string;
  title: string;
};

export interface CommonProps {
  searchHandler: ((value: MovieData) => void) | ((value: WatchlistData[]) => void);
  setToggle?: (value: boolean) => void;
  viewToggle?: boolean;
  watchlistData: WatchlistData[];
}
