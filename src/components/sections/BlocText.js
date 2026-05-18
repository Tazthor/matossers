'use client';
import React from "react";
import { Box, Text, Flex, Image, Spacer, Heading } from "@chakra-ui/react";

export const BlocText = function () {
  return (
    <Box
      w="100%"
      bg="argila"
      p={{ base: "25px 0", md: "50px 0" }}
      maxWidth="2500px"
    >
      <Box
        w={{ base: "90%", md: "80%", xl: "75%" }}
        m="auto"
        fontSize={{ base: "md", md: "normal" }}
        textAlign="left"
      >
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="groc.mat"
          textTransform="uppercase"
        >
          Sobre nosaltres{" "}
        </Heading>

        <Flex display={{ base: "block", xl: "flex" }} mt="10px">
          <Box w={{ base: "100%", xl: "64%" }} mr={{ base: "0", xl: "2%" }}>
            <Text color="blanc" mb="20px">
              Els Matossers de Molins de Rei, som una colla castellera fundada
              l&apos;any 2002 i la nostra raó de ser és alçar castells i
              promocionar el món casteller arreu.
            </Text>
            <Text color="blanc" mb="20px">
              El color de la nostra camisa és marró argila, com el pont de
              Carles III que fins els anys 70 unia les dues ribes del riu
              Llobregat a l&apos;alçada de Molins de Rei. El nom
              &apos;Matossers&apos; és una barreja dels mots: matusser com a
              sinònim de sapastre o maldestre; i matoser, habitant de la vila de
              Matoses, nom primigeni de Molins de Rei.
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "100%", xl: "28%" }}
            ml={{ base: "0", xl: "2%" }}
            display={{ base: "flex", xl: "block" }}
          >
            <Image
              src="/images/escut.png"
              alt="Matossers"
              maxH="100px"
              ml="auto"
              mr={{ base: "2%", xl: "auto" }}
              mt={{ base: "0", xl: "-50px" }}
              mb="20px"
            />
            <Text color="blanc" mb="20px">
              L&apos;escut de la colla, creat per Mercè Anducas, simbolitza una
              enxaneta enfilant-se a una roda de molí, escut i símbol invequívoc
              de la vila de Molins de Rei.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default BlocText;
