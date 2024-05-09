import { useState, useEffect } from "react";

import { Flex, Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import Title from "./Title";

export const GridDadesVertical = function ({
  dades,
  titol,
  subtitol,
  invert = false,
  majuscules = true,
  hasImage = false,
  imageUlr,
  imageName,
  items,
}) {
  const [isSorted, setIsSorted] = useState(false);
  useEffect(() => {
    dades = dades.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    setIsSorted(true);
  }, []);

  return (
    <Box
    w={{base:"90%", md:"80%", xl:"75%"}}
      mx="auto"
      bg={invert ? "argila" : "blanc"}
      color={invert ? "blanc" : "negre"}
      textAlign="center"
    >
      <Title
      textAlign="center"
        header="2"
        text={titol}
        color={invert ? "groc.brillant" : "argila"}
        textTransform={majuscules ? "uppercase" : "none"}
      />
      {subtitol && <Text fontSize="lg" mb="30px">{subtitol}</Text>}
      <Flex w="100%" display={{ base: "block", xl: "flex" }} mt="20px">
        {hasImage && (
          <Box w={{ base: "100%", xl: "28%" }} mr={{ base: "0", md: "2%" }}>
            <Image
              w="100%"
              maxW="300px"
              src={imageUlr}
              alt={imageName}
              mx="auto"
              my="30px"
            />
          </Box>
        )}
        {isSorted && (
          <Grid
            w="100%"
            templateColumns={{
              base: "repeat("+ items.sm +", 1fr)",
              md: "repeat("+ items.md +", 1fr)",
              xl: "repeat("+ items.xl +", 1fr)",
            }}
            gap={4}
          >
            {dades.map((dada, index) => {
              return (
                <GridItem w="100%" key={index} textAlign="center">
                  <Flex flexDir="column" justifyContent="center" mb="10px">
                    <Box
                      w="70px"
                      h="70px"
                      borderRadius="100%"
                      bg={invert ? "blanc" : "argila"}
                      position="relative"
                      mx="auto"
                      mb="10px"
                    >
                      <Image
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        w="50px"
                        m="auto"
                        src={dada.icon}
                        alt={dada.label}
                      />
                    </Box>
                  <Box>
                    <Text fontWeight={600}>{dada.item}</Text>
                    {dada.data != undefined && <Text>{dada.data}</Text>}
                  </Box>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        )}
      </Flex>
    </Box>
  );
};
export default GridDadesVertical;
