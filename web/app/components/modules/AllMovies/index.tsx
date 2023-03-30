import { Heading, Stack, Text } from "@chakra-ui/react";
import MovieCard from "components/modules/MovieCard";
import { MovieData, WatchlistData } from "constants/types";

interface AllMoviesProps {
  movieData: MovieData["Search"];
  setWatchlistData: (data: WatchlistData[]) => void;
  watchlistData: WatchlistData[];
  viewToggle: boolean;
  watchedList: string[];
  setWatchedList: (data: string[]) => void;
}

const AllMovies = ({
  movieData,
  setWatchlistData,
  watchlistData,
  viewToggle,
  watchedList,
  setWatchedList,
}: AllMoviesProps) => (
  <>
    {movieData &&
      movieData.map(({ imdbID, Poster: imageUrl, Title: title }) => (
        <MovieCard
          title={title}
          imageUrl={imageUrl}
          imdbID={imdbID}
          key={imdbID}
          watchlistData={watchlistData}
          setWatchlistData={setWatchlistData}
          viewToggle={viewToggle}
          watchedList={watchedList}
          setWatchedList={setWatchedList}
        />
      ))}
    {!movieData && (
      <Stack align="center" mt={10}>
        <Heading color="whiteAlpha.900">Welcome!</Heading>
        <Text color="whiteAlpha.900" textAlign="center">
          Please start typing in the search bar above to find movies
        </Text>
      </Stack>
    )}
  </>
);
export default AllMovies;
