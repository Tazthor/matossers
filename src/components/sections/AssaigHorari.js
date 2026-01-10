"use client";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const AssaigHorari = () => {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Box w="100%" mb="10px">
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="argila"
          textTransform="uppercase"
        >
          Quan assagem
        </Heading>
        <Flex display={{ base: "block", md: "flex" }} mt="20px">
          <Flex flexDirection="column" mr={{ base: "0", md: "15px" }}>
            <Heading
              fontSize="lg"
              lineHeight="normal"
              color="negre"
              textTransform="uppercase"
            >
              Dimecres
            </Heading>
            <Text>
              <strong>Canalla:</strong> de 20 h a 21 h
            </Text>
            <Text>
              <strong>Assaig general:</strong> de 21 h a 22:30 h
            </Text>
          </Flex>
          <Flex flexDirection="column" ml={{ base: "0", md: "15px" }}>
            <Heading
              fontSize="lg"
              lineHeight="normal"
              color="negre"
              textTransform="uppercase"
            >
              Divendres
            </Heading>
            <Text>
              <strong>Canalla:</strong> de 20 h a 21 h
            </Text>
            <Text>
              <strong>Assaig general:</strong> de 21 h a 23 h
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default AssaigHorari;
