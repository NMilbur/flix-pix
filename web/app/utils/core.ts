/*
import { LOCAL_STORAGE_KEY, WATCHED_STORAGE_KEY } from "constants/core";
import { WatchlistData } from "constants/types";

const windowCheck = () => typeof window !== undefined;

const getTracker = (key: string) => {
  if (windowCheck()) {
    const stored = window.localStorage.getItem(key);

    return stored ? JSON.parse(stored) : [];
  }

  return [];
};

const setTracker = (key: string, data: unknown[]) =>
  windowCheck() ? window.localStorage.setItem(key, JSON.stringify(data)) : null;

export const getWatchlistMovies = () => getTracker(LOCAL_STORAGE_KEY);

export const setWatchlistMovies = (watchlistData: WatchlistData[]) =>
  setTracker(LOCAL_STORAGE_KEY, watchlistData);

export const getWatchedMovies = () => getTracker(WATCHED_STORAGE_KEY);

export const setWatchedMovies = (ids: string[]) => setTracker(WATCHED_STORAGE_KEY, ids);
*/
