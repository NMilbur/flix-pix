"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Page from "components/modules/Page";
import { MovieData } from "constants/types";
import MovieCard from "components/foundation/MovieCard";

export default function Home() {
  const [movieData, setMovieData] = useState<MovieData>({});
  const [watchlistData, setWatchlistData] = useState<MovieData>({});
  const [showWatchlist, setShowWatchlist] = useState(false);

  return (
    <Page
      searchHandler={showWatchlist ? setWatchlistData : setMovieData}
      viewToggle={showWatchlist}
      setToggle={setShowWatchlist}
    >
      <Flex flexWrap="wrap" gridGap={6} justify="center" mb={10}>
        {movieData &&
          "Search" in movieData &&
          movieData["Search"].map(({ imdbID, Poster: posterUrl, Title: title }) => (
            <MovieCard heading={title} imageUrl={posterUrl} key={imdbID} />
          ))}
        {!movieData["Search"] && (
          <Stack align="center" mt={10}>
            <Heading color="whiteAlpha.900">Welcome!</Heading>
            <Text color="whiteAlpha.900">
              Please start typing in the search bar above to find movies
            </Text>
          </Stack>
        )}
      </Flex>
    </Page>
  );
}
