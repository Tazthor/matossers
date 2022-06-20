import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

export const Title = function (props) {
  return (
    <Box w="100%" maxW="2500px" m="auto" bg="argila.500" color="#fff" py="70px">
      <Flex w="90%" m="auto">
        <Box w="30%" mr="2%">
          Footer1
        </Box>
        <Box w="30%" mx="3%">
          Footer2
        </Box>
        <Box w="30%" ml="2%">
          Footer3
        </Box>
      </Flex>
    </Box>
  );
};
export default Title;
