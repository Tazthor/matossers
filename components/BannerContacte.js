import { Box, Text, Flex, Link } from "@chakra-ui/react";
import FormContacte from "./FormContacte";
import Title from "./Title";

export const BannerContacte = function (props) {
  return (
    <Box
      w="100%"
      m="auto"
      position="relative"
      backgroundImage={{ base: "none", xl: props.img }}
      backgroundPosition="left"
      backgroundSize="cover"
    >
      <Box w="100%" mx="auto" my={{ base: "0", xl: "60px" }} textAlign="left">
        <Flex
          w={{ base: "90%", md: "80%", xl: "77%" }}
          m="auto"
          display={{ base: "block", xl: "flex" }}
        >
          <Box
            w={{ base: "90%", xl: "38%", xxl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            color={{ base: "negre", xl: "blanc" }}
            fontSize={{ base: "normal", xl: "lg" }}
            pt={{ base: "0", xl: "30px" }}
            textAlign={{ base: "center", xl: "left" }}
            mb={{ base: "40px", xl: "0" }}
          >
            <Box mb="10px">
              <Title
                header="2"
                text="Vols parlar amb nosaltres?"
                color={{ base: "argila", xl: "groc.mat" }}
              />
            </Box>
            <Text mb="20px">
              Pots contactar amb nosaltres a través del nostre correu
              electrònic:{" "}
              <Link
                color={{ base: "argila", xl: "groc.mat" }}
                href="mailto:matossers@matossers.cat"
              >
                matossers@matossers.cat
              </Link>
            </Text>
            <Text mb="20px">
              Al número de telèfon:{" "}
              <Link
                color={{ base: "argila", xl: "groc.mat" }}
                href="tel:669840867"
              >
                669 84 08 67
              </Link>
            </Text>
            <Text mb="20px">o emplenant el següent formulari de contacte:</Text>
          </Box>
          <Box
            w={{ xl: "58%", xxl: "48%" }}
            ml="2%"
            display={{ base: "none", xl: "block" }}
          >
            <FormContacte />
          </Box>
          <Box display={{ base: "block", xl: "none" }}>
            <FormContacte negatiu />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default BannerContacte;
