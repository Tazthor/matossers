import { Box, Text, Flex, Link } from "@chakra-ui/react";
import FormContacte from "./FormContacte";
import Title from "./Title";

export const BannerContacte = function (props) {
  return (
    <>
      <Box
        w="100%"
        m="auto"
        position="relative"
        backgroundImage={props.img}
        backgroundPosition="left"
        backgroundSize="cover"
        display={{base:"none", xl:"block"}}
      >
        <Box w="100%" mx="auto" my="60px" textAlign="left">
          <Flex w={{base:"90%", md:"80%", xl:"75%"}} m="auto">
            <Box w="48%" mr="2%" color="blanc" fontSize={"lg"} pt="30px">
              <Box mb="10px">
                <Title
                  header="2"
                  text="Vols parlar amb nosaltres?"
                  color="groc.mat"
                />
              </Box>
              <Text mb="20px">
                Pots contactar amb nosaltres a través del nostre correu
                electrònic:{" "}
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
              <Text mb="20px">
                o emplenant el següent formulari de contacte:
              </Text>
            </Box>
            <Box w="48%" ml="2%">
              <FormContacte />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box w="90%" m="auto" display={{base:"block", xl:"none"}}>
        <Box mb="40px" textAlign="center">
          <Box mb="10px">
            <Title
              header="2"
              text="Vols parlar amb nosaltres?"
              color="argila"
            />
          </Box>
          <Text mb="20px">
            Pots contactar amb nosaltres a través del nostre correu electrònic:{" "}
            <Link color="argila" href="mailto:matossers@matossers.cat">
              matossers@matossers.cat
            </Link>
          </Text>
          <Text mb="20px">
            Al número de telèfon:{" "}
            <Link color="argila" href="tel:669840867">
              669 84 08 67
            </Link>
          </Text>
          <Text mb="20px">o emplenant el següent formulari de contacte:</Text>
        </Box>
        <FormContacte negatiu />
      </Box>
    </>
  );
};
export default BannerContacte;
