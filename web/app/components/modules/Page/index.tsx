"use client";

import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import AppBar from "components/elements/AppBar";
import { CommonProps } from "constants/types";

interface PageProps {
  children: ReactNode;
}

const Page = ({
  children,
  searchHandler,
  setToggle,
  viewToggle,
  watchlistData,
}: PageProps & CommonProps) => {
  return (
    <Flex
      flexDirection="column"
      rowGap={10}
      height="100%"
      bgGradient={"linear(to-t, gray.900 0%, gray.600 80%, yellow.400 95%)"}
    >
      <AppBar
        searchHandler={searchHandler}
        setToggle={setToggle}
        viewToggle={viewToggle}
        watchlistData={watchlistData}
      />
      <Container maxW="container.xl">{children}</Container>
    </Flex>
  );
};

export default Page;
