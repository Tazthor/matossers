import { useState, useEffect } from "react";

import { Flex, Box, Text, Image, Grid } from "@chakra-ui/react";
import Title from "./Title";

export const GridDades = function ({
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
      w="100%"
      mx="auto"
      bg={invert ? "argila" : "blanc"}
      color={invert ? "blanc" : "negre"}
    >
      <Title
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
                <Flex w="100%" key={index}>
                  <Box w="15%" mr="25px">
                    <Box
                      w="50px"
                      h="50px"
                      borderRadius="100%"
                      bg={invert ? "blanc" : "argila"}
                      position="relative"
                    >
                      <Image
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                        w="30px"
                        m="auto"
                        src={dada.iconUrl}
                        alt={dada.label}
                      />
                    </Box>
                  </Box>
                  <Box w="81%" ml="2%">
                    <Text fontWeight={600}>{dada.item}</Text>
                    {dada.data != undefined && <Text>{dada.data}</Text>}
                  </Box>
                </Flex>
              );
            })}
          </Grid>
        )}
      </Flex>
    </Box>
  );
};
export default GridDades;
