"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Input,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  StarIcon,
} from "@chakra-ui/icons";

import Desktop from "components/foundation/Navigation/Desktop";
import Mobile from "components/foundation/Navigation/Mobile";
import { CommonProps } from "constants/types";

const AppBar = ({ searchHandler, setToggle, viewToggle = false }: CommonProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgGradient={"linear(to-t, yellow.400 0%, yellow.200 30%)"}>
      <Flex
        color="blackAlpha.900"
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            color="blackAlpha.900"
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Container maxW="container.xl">
          <Desktop searchHandler={searchHandler} setToggle={setToggle} viewToggle={viewToggle} />
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Mobile />
      </Collapse>
    </Box>
  );
};

export default AppBar;
