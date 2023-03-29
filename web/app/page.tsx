"use client";

import { useEffect, useState } from "react";

import { Divider, Flex, Heading, Stack } from "@chakra-ui/react";

import Page from "components/modules/Page";
import { MovieData, WatchlistData } from "constants/types";
import {
  getWatchedMovies,
  getWatchlistMovies,
  setWatchedMovies,
  setWatchlistMovies,
} from "utils/core";
import AllMovies from "components/modules/AllMovies";
import Watchlist from "components/modules/Watchlist";

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData>({});
  const [watchlistData, setWatchlistData] = useState<WatchlistData[]>(getWatchlistMovies());
  const [filteredWatchlist, setFilteredWatchlist] = useState<WatchlistData[]>([]);
  const [watchedList, setWatchedList] = useState<string[]>(getWatchedMovies());
  const [showWatchlist, setShowWatchlist] = useState(false);

  useEffect(() => {
    setWatchlistMovies(watchlistData);
  }, [watchlistData]);

  useEffect(() => {
    setWatchedMovies(watchedList);
  }, [watchedList]);

  return (
    <Page
      searchHandler={showWatchlist ? setFilteredWatchlist : setMovieData}
      viewToggle={showWatchlist}
      setToggle={setShowWatchlist}
      watchlistData={watchlistData}
    >
      <Stack align="center" spacing={6}>
        <Heading>{showWatchlist ? "Your Watchlist" : "Movie Search"}</Heading>
        <Divider width="50%" />

        <Flex flexWrap="wrap" gridGap={6} justify="center" mb={10}>
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
