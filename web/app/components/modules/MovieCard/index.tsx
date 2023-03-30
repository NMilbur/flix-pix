"use client";

import { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { WatchlistData } from "constants/types";
import { AddIcon, DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import BannerOverlay from "components/foundation/BannerOverlay";
import ActionButton from "../../foundation/ActionButton";
import CardWrapper from "components/foundation/CardWrapper";

interface CardProps {
  setWatchlistData: (data: WatchlistData[]) => void;
  watchlistData: WatchlistData[];
  viewToggle: boolean;
  watchedList: string[];
  setWatchedList: (data: string[]) => void;
}

const MovieCard = ({
  title,
  imageUrl,
  imdbID,
  setWatchlistData,
  watchlistData,
  viewToggle,
  watchedList,
  setWatchedList,
}: CardProps & WatchlistData) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [watched, setWatched] = useState(false);
  const [markedIds, setMarkedIds] = useState<string[]>([]);

  useEffect(() => {
    setMarkedIds(watchlistData.map(({ imdbID }) => imdbID));
  }, [watchlistData]);

  useEffect(() => {
    if (markedIds.includes(imdbID)) setIsBookmarked(true);
  }, [watchlistData, markedIds]);

  useEffect(() => {
    if (watchedList.includes(imdbID)) setWatched(true);
  }, [watchedList]);

  const addToWatchlist = (title: string, imageUrl: string, imdbID: string) => {
    setWatchlistData([...watchlistData, { imdbID, imageUrl, title }]);
    setIsBookmarked(true);
  };

  const removeFromWatchlist = (imdbID: string) => {
    setWatchlistData(watchlistData.filter(({ imdbID: id }) => id !== imdbID));
    setIsBookmarked(false);
  };

  const markWatched = (imdbID: string) => {
    setWatchedList([...watchedList, imdbID]);
    setWatched(true);
  };

  const unmarkWatched = (imdbID: string) => {
    setWatchedList(watchedList.length > 1 ? watchedList.filter((id) => id !== imdbID) : []);
    setWatched(false);
  };

  return (
    <CardWrapper>
      {watched && <BannerOverlay text="Watched" />}
      <Image src={imageUrl} alt={title} />
      <Stack width="100%">
        <Box m={2}>
          <Heading size="md" textAlign="center">
            {title}
          </Heading>
        </Box>
        <Flex width="100%">
          {viewToggle && (
            <ActionButton
              extraStyles={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              buttonColor="green.400"
              clickHandler={() => (watched ? unmarkWatched(imdbID) : markWatched(imdbID))}
              title={watched ? "Mark as unwatched" : "Mark as watched"}
              icon={watched ? <ViewOffIcon /> : <ViewIcon />}
            />
          )}
          <ActionButton
            extraStyles={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: viewToggle || watched ? 0 : undefined,
            }}
            buttonColor={isBookmarked ? "red.500" : "gray.500"}
            clickHandler={() =>
              isBookmarked ? removeFromWatchlist(imdbID) : addToWatchlist(title, imageUrl, imdbID)
            }
            title={isBookmarked ? "Remove from watch list" : "Add to watch list"}
            icon={isBookmarked ? <DeleteIcon /> : <AddIcon />}
          />
        </Flex>
      </Stack>
    </CardWrapper>
  );
};

export default MovieCard;
