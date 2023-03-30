import { Heading, Stack, Text } from "@chakra-ui/react";
import MovieCard from "components/modules/MovieCard";
import { WatchlistData } from "constants/types";
import { useEffect, useState } from "react";

interface WatchlistProps {
  filteredWatchlist?: WatchlistData[];
  setWatchlistData: (data: WatchlistData[]) => void;
  watchlistData: WatchlistData[];
  viewToggle: boolean;
  watchedList: string[];
  setWatchedList: (data: string[]) => void;
}

const Watchlist = ({
  filteredWatchlist,
  setWatchlistData,
  watchlistData,
  viewToggle,
  watchedList,
  setWatchedList,
}: WatchlistProps) => {
  const [activeWatchlist, setActiveWatchlist] = useState(watchlistData);

  useEffect(() => {
    setActiveWatchlist(
      filteredWatchlist && filteredWatchlist.length > 0 ? filteredWatchlist : watchlistData
    );
  }, [filteredWatchlist, watchlistData]);

  return (
    <>
      {activeWatchlist.length > 0 &&
        activeWatchlist.map(({ imdbID, imageUrl, title }) => (
          <MovieCard
            title={title}
            imageUrl={imageUrl}
            imdbID={imdbID}
            key={imdbID}
            watchlistData={activeWatchlist}
            setWatchlistData={setWatchlistData}
            viewToggle={viewToggle}
            watchedList={watchedList}
            setWatchedList={setWatchedList}
          />
        ))}
      {activeWatchlist.length === 0 && (
        <Stack align="center" mt={10}>
          <Heading color="whiteAlpha.900">Hello!</Heading>
          <Text color="whiteAlpha.900">
            You currently do not have any movies in your watchlist.
          </Text>
        </Stack>
      )}
    </>
  );
};
export default Watchlist;
