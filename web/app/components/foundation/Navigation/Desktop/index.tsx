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
import SearchInput from "components/foundation/SearchInput";
import { CommonProps } from "constants/types";

const DesktopNav = ({ searchHandler, setToggle, viewToggle }: CommonProps) => {
  return (
    <Flex flex={{ base: 1 }} justify="space-between">
      <Heading textAlign={useBreakpointValue({ base: "center", md: "left" })}>Flix Pix</Heading>

      <SearchInput searchHandler={searchHandler} />

      <Button
        leftIcon={<StarIcon />}
        variant="solid"
        colorScheme="gray"
        onClick={() => setToggle(!viewToggle)}
      >
        {viewToggle ? "Search Movies" : "Watchlist"}
      </Button>
    </Flex>
  );
};

export default DesktopNav;
