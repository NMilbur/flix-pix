"use client";

import { Box, Flex, Container } from "@chakra-ui/react";

import Desktop from "components/foundation/Navigation";
import { CommonProps } from "constants/types";

const AppBar = ({ searchHandler, setToggle, viewToggle, watchlistData }: CommonProps) => (
  <Box bgGradient={"linear(to-t, yellow.400 0%, yellow.200 30%)"}>
    <Flex
      color="blackAlpha.900"
      minH={"70px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      align={"center"}
      justifyContent={"space-between"}
    >
      <Container maxW="container.xl">
        <Desktop
          searchHandler={searchHandler}
          setToggle={setToggle}
          viewToggle={viewToggle}
          watchlistData={watchlistData}
        />
      </Container>
    </Flex>
  </Box>
);

export default AppBar;
