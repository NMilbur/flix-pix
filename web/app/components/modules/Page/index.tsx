"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import AppBar from "components/elements/AppBar";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Flex
      flexDirection="column"
      rowGap={10}
      height="100%"
      bgGradient={"linear(to-t, gray.900 0%, gray.600 80%, yellow.400 95%)"}
    >
      <AppBar />
      <Container maxW="container.xl">{children}</Container>
    </Flex>
  );
};

export default Page;
