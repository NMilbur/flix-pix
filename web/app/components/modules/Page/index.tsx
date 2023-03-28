"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import AppBar from "components/elements/AppBar";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Flex flexDirection="column" rowGap={10}>
      <AppBar />
      <Container maxW="container.xl">{children}</Container>
    </Flex>
  );
};

export default Page;
