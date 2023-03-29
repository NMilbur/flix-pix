import { Button, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import SearchInput from "components/foundation/SearchInput";
import { CommonProps } from "constants/types";

const Navigation = ({ searchHandler, setToggle, viewToggle, watchlistData }: CommonProps) => {
  return (
    <Flex
      flex={{ base: 1 }}
      justify="space-between"
      direction={useBreakpointValue({ base: "column", md: "row" })}
    >
      <Button variant="ghost" onClick={() => (setToggle ? setToggle(false) : null)}>
        <Heading textAlign="center" color="blackAlpha.800">
          Flix Pix
        </Heading>
      </Button>

      <SearchInput
        searchHandler={searchHandler}
        watchlistData={watchlistData}
        viewToggle={viewToggle}
      />

      <Button
        leftIcon={viewToggle ? <SearchIcon /> : <StarIcon />}
        variant="ghost"
        color="blackAlpha.800"
        onClick={() => (setToggle ? setToggle(!viewToggle) : null)}
        fontSize="lg"
      >
        {viewToggle ? "Search Movies" : "Watchlist"}
      </Button>
    </Flex>
  );
};

export default Navigation;
