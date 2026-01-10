"use client";
import { useMemo } from "react";
import { Grid, Box, Text, Image, Heading } from "@chakra-ui/react";

export const Juntes = function ({ junta }) {
  const sortedJunta = useMemo(() => {
    return [...junta].sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
  }, [junta]);

  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} mx="auto" mb={{base:"30px", md:"60px"}}>
      <Box mt="30px" mb="10px">
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="argila"
          textTransform="uppercase"
        >
          President i cap de colla
        </Heading>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {sortedJunta.map((person, index) => {
          if (person.equip == "cap" || person.equip == "president")
            return (
              <Box key={index} fontSize={{base:"base", md:"lg"}}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text>{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
      <Box mt="30px" mb="10px">
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="argila"
          textTransform="uppercase"
        >
          Junta administrativa
        </Heading>
      </Box>
      <Grid
        mt="15px"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {sortedJunta.map((person, index) => {
          if (person.equip == "administrativa")
            return (
              <Box key={index} fontSize={{base:"base", md:"lg"}}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text>{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
      <Box mt="30px" mb="10px">
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="argila"
          textTransform="uppercase"
        >
          Junta tècnica
        </Heading>{" "}
      </Box>
      <Grid
        mt="15px"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {sortedJunta.map((person, index) => {
          if (person.equip == "tecnica")
            return (
              <Box key={index} fontSize={{base:"base", md:"lg"}}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text>{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
    </Box>
  );
};
export default Juntes;
