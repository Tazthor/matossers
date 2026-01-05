import { Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import FormContacte from "../forms/FormContacte";

export const BannerContacte = function (props) {
  return (
    <Box
      w="100%"
      mx="auto"
      mt={{ base: "40px", xl: "0" }}
      position="relative"
      backgroundImage={`url(${props.img})`}
      backgroundPosition="left"
      backgroundSize="cover"
      py={{ base: "30px", xl: "60px" }}
    >
      <Flex
        w={{ base: "90%", md: "80%", xl: "77%" }}
        m="auto"
        flexDir={{ base: "column", xl: "row" }}
        justifyContent="space-between"
      >
        <Box
          maxW={{ base: "100%", xl: "40%" }}
          color="blanc"
          fontSize="base"
          pt={{ base: "0", xl: "30px" }}
          textAlign={{ base: "center", xl: "left" }}
          mb={{ base: "40px", xl: "0" }}
        >
          <Box mb="10px">
            <Heading
              fontSize={{ base: "xl", md: "xxl" }}
              lineHeight="normal"
              color="groc.mat"
              fontFamily="heading"
              textTransform="uppercase"
            >
              Vols parlar amb nosaltres?
            </Heading>
          </Box>
          <Text mb="20px">
            Pots contactar amb nosaltres a través del nostre correu electrònic:{" "}
            <Link color="groc.mat" href="mailto:matossers@matossers.cat">
              matossers@matossers.cat
            </Link>
          </Text>
          <Text mb="20px">
            Al número de telèfon:{" "}
            <Link color="groc.mat" href="tel:669840867">
              669 84 08 67
            </Link>
          </Text>
          <Text mb="20px">o emplenant el següent formulari de contacte:</Text>
        </Box>
        <Box w="50%" display={{ base: "none", xl: "block" }}>
          <FormContacte />
        </Box>
        <Box display={{ base: "block", xl: "none" }}>
          <FormContacte negatiu />
        </Box>
      </Flex>
    </Box>
  );
};
export default BannerContacte;
