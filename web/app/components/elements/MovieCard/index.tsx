"use client";

import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { WatchlistData } from "constants/types";
import { AddIcon, DeleteIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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
    <Box
      maxW={{ base: "full", md: "275px" }}
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex
        height="100%"
        direction="column"
        justify="space-between"
        align="center"
        position="relative"
      >
        {watched && (
          <Flex
            justify="center"
            align="center"
            width="100%"
            height="10%"
            zIndex={10}
            bg="yellow.500"
            opacity={0.8}
            position="absolute"
          >
            <Text fontSize="2xl" color="whiteAlpha.900" fontWeight="bold">
              Watched
            </Text>
          </Flex>
        )}
        <Image src={imageUrl} alt={title} />
        <Box m={2}>
          <Heading size="md" textAlign="center">
            {title}
          </Heading>
        </Box>
        <Flex width="100%">
          {viewToggle && (
            <Button
              width="100%"
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              bg="green.400"
              onClick={() => (watched ? unmarkWatched(imdbID) : markWatched(imdbID))}
              title={watched ? "Mark as unwatched" : "Mark as watched"}
            >
              {watched ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          )}
          <Button
            width="100%"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: viewToggle || watched ? 0 : undefined,
            }}
            bg={isBookmarked ? "red.500" : "gray.500"}
            onClick={() =>
              isBookmarked ? removeFromWatchlist(imdbID) : addToWatchlist(title, imageUrl, imdbID)
            }
            title={isBookmarked ? "Remove from watch list" : "Add to watch list"}
          >
            {isBookmarked ? <DeleteIcon /> : <AddIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovieCard;
