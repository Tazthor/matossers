import { useEffect, useState } from "react";
import { Grid, Box, Text, Image } from "@chakra-ui/react";
import Title from "./Title";
import { getImages } from "../utils/utils";

export const Juntes = function ({ junta }) {  
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    junta = junta.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    setIsSorted(true);
  }, []);


  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} mx="auto">
      <Box mt="30px">
        <Title header="2" text="President i caps de colla" />
      </Box>
      <Grid
        templateColumns={{base:"repeat(2, 1fr)", md:"repeat(3, 1fr)", xl:"repeat(3, 1fr)"}}
        gap={8}
      >
        {junta.map((person, index) => {
          if (person.equip == "cap" || person.equip == "president")
            return (
              <Box key={index}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontSize="xl" fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text fontSize="lg">{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
      <Box mt="30px">
        <Title header="2" text="Junta administrativa" />
      </Box>
      <Grid
        mt="15px"
        templateColumns={{base:"repeat(2, 1fr)", md:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}}
        gap={6}
      >
        {junta.map((person, index) => {
          if (person.equip == "administrativa")
            return (
              <Box key={index}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontSize="xl" fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text fontSize="lg">{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
      <Box mt="30px">
        <Title header="2" text="Junta tècnica" />
      </Box>
      <Grid
        mt="15px"
        templateColumns={{base:"repeat(2, 1fr)", md:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}}
        gap={6}
      >
        {junta.map((person, index) => {
          if (person.equip == "tecnica")
            return (
              <Box key={index}>
                <Image w="100%" src={person.image} alt={person.nom} />
                <Text fontSize="xl" fontWeight={600} color="argila">
                  {person.carrec}
                </Text>
                <Text fontSize="lg">{person.nom}</Text>
              </Box>
            );
        })}
      </Grid>
    </Box>
  );
};
export default Juntes;
