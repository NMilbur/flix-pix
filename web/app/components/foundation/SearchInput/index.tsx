"use client";

import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { CommonProps } from "constants/types";

const SearchInput = ({ searchHandler, viewToggle = false }: CommonProps) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () =>
      fetch(`/api/v1/search-titles/${search}`)
        .then((response) => response.json())
        .then((data) =>
          data && searchHandler !== undefined ? searchHandler(JSON.parse(data)) : {}
        );

    const debounce = setTimeout(() => {
      if (search.length > 0) fetchMovies();
    }, 750);

    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <Input
      placeholder="Enter a movie title"
      _placeholder={{ color: "whiteAlpha.900" }}
      maxWidth="50%"
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
