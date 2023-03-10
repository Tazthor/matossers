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
          <Box
            w="100%"
            m="auto"
            left="0"
            right="0"
            position="absolute"
            textAlign="left"
            top={["25%", "20%", "25%"]}
          >
            <Flex w="96%" ml="4%">
              <Box w={["0","0","50%"]}> </Box>
              <Box w={["90%","90%","34%"]} textAlign="center">
                <Text
                  fontSize={["xxl", "xxxl", "xxxl"]}
                  fontWeight="bold"
                  fontFamily="Oswald"
                  color="groc.brillant"
                >
                  MATOSSERS DE MOLINS DE REI
                </Text>
                <Text
                  fontSize={["xxl", "xxxl", "xxxl"]}
                  fontWeight="bold"
                  fontFamily="Oswald"
                  color="blanc"
                >
                  {" "}
                  Fent castells des de 2002!
                </Text>
              </Box>
              <Box w="16%"> </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};
export default HeaderHome;
