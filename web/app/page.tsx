"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";

import Page from "components/modules/Page";

export default function Home() {
  return (
    <Page>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Card
            heading={"Heading"}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
            key={num}
          />
        ))}
      </Flex>
    </Page>
  );
}

interface CardProps {
  heading: string;
  description: string;
  href: string;
}

const Card = ({ heading, description, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};
