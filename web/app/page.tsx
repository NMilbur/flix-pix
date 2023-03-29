"use client";

import { useEffect, useState } from "react";

import { Divider, Flex, Heading, Stack } from "@chakra-ui/react";

import Page from "components/modules/Page";
import { MovieData, WatchlistData } from "constants/types";
import AllMovies from "components/modules/AllMovies";
import Watchlist from "components/modules/Watchlist";
import { LOCAL_STORAGE_KEY, WATCHED_STORAGE_KEY } from "constants/core";

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData>({});
  const [watchlistData, setWatchlistData] = useState<WatchlistData[]>([]);
  const [filteredWatchlist, setFilteredWatchlist] = useState<WatchlistData[]>([]);
  const [watchedList, setWatchedList] = useState<string[]>([]);
  const [showWatchlist, setShowWatchlist] = useState(false);

  useEffect(() => {
    const storedWatchlist = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const storedWatchedIds = window.localStorage.getItem(WATCHED_STORAGE_KEY);

    if (storedWatchlist) {
      setWatchlistData(JSON.parse(storedWatchlist));
    }

    if (storedWatchedIds) {
      setWatchedList(JSON.parse(storedWatchedIds));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchlistData));
  }, [watchlistData]);

  useEffect(() => {
    window.localStorage.setItem(WATCHED_STORAGE_KEY, JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <Page
      searchHandler={showWatchlist ? setFilteredWatchlist : setMovieData}
      viewToggle={showWatchlist}
      setToggle={setShowWatchlist}
      watchlistData={watchlistData}
    >
      <Stack align="center" spacing={6} mb={10}>
        <Heading>{showWatchlist ? "Your Watchlist" : "Movie Search"}</Heading>
        <Divider width="50%" />

        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {showWatchlist ? (
            <Watchlist
              setWatchlistData={setWatchlistData}
              watchlistData={watchlistData}
              filteredWatchlist={filteredWatchlist}
              viewToggle={showWatchlist}
              watchedList={watchedList}
              setWatchedList={setWatchedList}
            />
          ) : (
            <AllMovies
              movieData={movieData["Search"]}
              setWatchlistData={setWatchlistData}
              watchlistData={watchlistData}
              viewToggle={showWatchlist}
              watchedList={watchedList}
              setWatchedList={setWatchedList}
            />
          )}
        </Flex>
      </Stack>
    </Page>
  );
}
