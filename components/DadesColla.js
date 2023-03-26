import { Flex, Box, Text, Image, Grid } from "@chakra-ui/react";
import Title from "./Title";
import dadesColla from "../public/data/dades_colla.json";

export const DadesColla = function (props) {
  return (
    <Box w={["90%", "80%", "75%"]} mx="auto">
      <Title header="2" text="La colla" />
      <Flex w="100%" display={["block", "block", "flex"]}>
        <Box w={["100%", "100%", "28%"]} mr={["0", "2%", "2%"]}>
          <Image w="100%" maxW="300px" src="/images/camisa.png" alt="Camisa" mx="auto" my="30px" />
        </Box>
        <Grid
          w="100%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
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
                      src={dada.icon}
                      alt={dada.label}
                    />
                  </Box>
                </Box>
                <Box w="81%" ml="2%">
                  <Text fontWeight={600}>{dada.label}</Text>
                  <Text>{dada.content}</Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
};
export default DadesColla;
