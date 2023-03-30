import { Flex, Text } from "@chakra-ui/react";

interface BannerOverlayProps {
  text: string;
}

const BannerOverlay = ({ text }: BannerOverlayProps) => (
  <Flex
    justify="center"
    align="center"
    width="100%"
    height="10%"
    zIndex={10}
    bg="yellow.500"
    opacity={0.8}
    position="absolute"
  >
    <Text fontSize="2xl" color="whiteAlpha.900" fontWeight="bold">
      {text}
    </Text>
  </Flex>
);

export default BannerOverlay;
