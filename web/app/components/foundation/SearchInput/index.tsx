"use client";

import { Input, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { CommonProps } from "constants/types";

const SearchInput = ({ searchHandler, viewToggle = false, watchlistData }: CommonProps) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (viewToggle) {
      if (search.length === 0) searchHandler([]);
      searchHandler(
        watchlistData.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      const fetchMovies = async () =>
        fetch(`/api/v1/search-titles/${search}`)
          .then((response) => response.json())
          .then((data) => searchHandler(JSON.parse(data)));

      const debounce = setTimeout(() => {
        if (search.length > 0) fetchMovies();
      }, 500);

      return () => clearTimeout(debounce);
    }
  }, [search]);

  return (
    <Input
      placeholder="Enter a movie title"
      _placeholder={{ color: "whiteAlpha.900" }}
      maxWidth={useBreakpointValue({ base: "100%", md: "50%" })}
      variant="outlined"
      color="whiteAlpha.900"
      _hover={{
        textDecoration: "none",
      }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
