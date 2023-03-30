import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => (
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
      {children}
    </Flex>
  </Box>
);

export default CardWrapper;
