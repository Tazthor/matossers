import { Box, Text, Flex, Heading } from "@chakra-ui/react";

export const Header = function (props) {
  return (
    <>
      <Box
        w="100%"
        maxW="2500px"
        m="auto"
        position="relative"
        h={props.home ? "550px" : "300px"}
        backgroundImage={props.img}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box
          position="absolute"
          top={{ base: "30%", xl: "40%" }}
          left="0"
          right="0"
          m="auto"
        >
          <Flex w="90%" m="auto">
            {(props.home && (
              <Box w="100%" textAlign="center">
                <Heading
                  fontSize={{ base: "xxl", md: "xxxl" }}
                  lineHeight="normal"
                  color="groc.brillant"
                >
                  MATOSSERS DE MOLINS DE REI
                </Heading>
                <Heading
                  fontSize={{ base: "xl", md: "xxl" }}
                  color="blanc"
                  lineHeight="normal"
                >
                  Fent castells des de 2002!
                </Heading>
              </Box>
            )) || (
              <Box w="100%" textAlign="center">
                <Heading
                  fontSize={{ base: "xxl", md: "xxxl" }}
                  lineHeight="normal"
                  textTransform="uppercase"
                  color="groc.mat"
                >
                  {props.title}
                </Heading>
              </Box>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
export default Header;
