import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const DesktopNav = () => {
  const linkColor = "blackAlpha.900";
  const linkHoverColor = "gray.600";

  return (
    <Flex flex={{ base: 1 }} justify="space-between">
      <Heading textAlign={useBreakpointValue({ base: "center", md: "left" })}>Flix Pix</Heading>

      <Input
        placeholder="Enter a movie title"
        _placeholder={{ color: "whiteAlpha.900" }}
        maxWidth="50%"
        variant="outlined"
        color="whiteAlpha.900"
        _hover={{
          textDecoration: "none",
        }}
      />

      <Button leftIcon={<StarIcon />} variant="solid" colorScheme="gray">
        Saved Movies
      </Button>
    </Flex>
  );
};

export default DesktopNav;
