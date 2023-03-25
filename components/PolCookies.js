import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Title from "./Title";

export const PolCookies = function (props) {
  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} m="auto" maxW="2500px">
      <Title header="1" text="Política de cookies" />
    </Box>
  );
};
export default PolCookies;
