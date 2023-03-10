import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Title from "./Title";

export const BlocText = function (props) {
  return (
    <Box
      w="100%"
      bg="argila"
      p={["25px 0", "50px 0", "50px 0"]}
      maxWidth="2500px"
    >
      <Box
        w={["90%", "80%", "75%"]}
        m="auto"
        fontSize={["md", "normal", "normal"]}
        textAlign="left"
      >
        <Title
          header="2"
          text="Sobre nosaltres"
          color="groc.mat"
        ></Title>

        <Flex display={["block", "block", "flex"]} mt="10px">
          <Box w={["100%","100","58%"]} mr={["0","0","2%"]}>
            <Text color="blanc" mb="20px">
              Els Matossers de Molins de Rei, som una colla castellera fundada
              l'any 2002 i la nostra raó de ser és alçar castells i promocionar
              el món casteller arreu.
            </Text>
            <Text color="blanc" mb="20px">
              El color de la nostra camisa és marró argila, com el pont de
              Carles III que fins els anys 70 unia les dues ribes del riu
              Llobregat a l'alçada de Molins de Rei. El nom "Matossers" és una
              barreja dels mots: matusser com a sinònim de sapastre o maldestre;
              i matoser, habitant de la vila de Matoses, nom primigeni de Molins
              de Rei.
            </Text>
          </Box>
          <Box w={["100%","100","38%"]} ml={["0","0","2%"]} display={["flex", "flex", "block"]}>
            <Image
              src="/images/escut.png"
              alt="Matossers"
              maxH="100px"
              ml={["auto","auto","auto"]}
              mr={["2%","2%","auto"]}
              mt={["0","0","-50px"]}
              mb="20px"
            />
            <Text color="blanc" mb="20px">
              L'escut de la colla, creat per Mercè Anducas, simbolitza una
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
