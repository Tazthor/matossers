import { Box, Text, Flex } from "@chakra-ui/react";

export const HeaderHome = function (props) {
  return (
    <>
      <Box
        w="100%"
        maxW="2500px"
        m="auto"
        position="relative"
        h="550px"
        backgroundImage={props.img}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        {props.titleVisible && (
          <Box position="absolute" top={{base:"30%",xl:"40%"}} left="0" right="0" m="auto">
          <Flex w="90%" m="auto">
              <Box w="100%" textAlign="center">
                <Text
                  fontSize={{base:"xxxl", md:"big"}}
                  fontWeight="bold"
                  fontFamily="Oswald"
                  color="groc.brillant"
                >
                  MATOSSERS DE MOLINS DE REI
                </Text>
                <Text
                  fontSize={{base:"xxl", md:"xxxl"}}
                  fontWeight="bold"
                  fontFamily="Oswald"
                  color="blanc"
                >
                  Fent castells des de 2002!
                </Text>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};
export default HeaderHome;
