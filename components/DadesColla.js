import { useState, useEffect } from "react";

import { Flex, Box, Text, Image, Grid } from "@chakra-ui/react";
import Title from "./Title";

export const DadesColla = function ({dadesColla}) {
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    dadesColla = dadesColla.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    setIsSorted(true);
  }, []);

  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} mx="auto">
      <Title header="2" text="La colla" />
      <Flex w="100%" display={{base:"block", xl:"flex"}}>
        <Box w={{base:"100%", xl:"28%"}} mr={{base:"0", md:"2%"}}>
          <Image w="100%" maxW="300px" src="/images/camisa.png" alt="Camisa" mx="auto" my="30px" />
        </Box>
        {isSorted &&
        <Grid
          w="100%"
          templateColumns={{
            base:"repeat(1, 1fr)",
            md:"repeat(2, 1fr)",
            xl:"repeat(3, 1fr)",
          }}
          gap={4}
        >
          {dadesColla.map((dada, index) => {
            return (
              <Flex w="100%" key={index}>
                <Box w="15%" mr="25px">
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="100%"
                    bg="argila"
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
                  <Text>{dada.data}</Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
        }
      </Flex>
    </Box>
  );
};
export default DadesColla;
