import { LOCAL_STORAGE_KEY, WATCHED_STORAGE_KEY } from "constants/core";
import { WatchlistData } from "constants/types";

const getTracker = (key: string) => {
  const stored = window.localStorage.getItem(key);

  return stored ? JSON.parse(stored) : [];
};

const setTracker = (key: string, data: unknown[]) =>
  window.localStorage.setItem(key, JSON.stringify(data));

export const getWatchlistMovies = () => getTracker(LOCAL_STORAGE_KEY);

export const setWatchlistMovies = (watchlistData: WatchlistData[]) =>
  setTracker(LOCAL_STORAGE_KEY, watchlistData);

export const getWatchedMovies = () => getTracker(WATCHED_STORAGE_KEY);

export const setWatchedMovies = (ids: string[]) => setTracker(WATCHED_STORAGE_KEY, ids);
