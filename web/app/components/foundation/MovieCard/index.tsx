"use client";

import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

interface CardProps {
  heading: string;
  imageUrl?: string;
}

const MovieCard = ({ heading, imageUrl }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex height="100%" direction="column" justify="space-between" align="center">
        <Image src={imageUrl} alt={heading} />
        <Box m={2}>
          <Heading size="md" align="center">
            {heading}
          </Heading>
        </Box>
        <Button width="100%" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Add to Watchlist
        </Button>
      </Flex>
    </Box>
  );
};

export default MovieCard;
