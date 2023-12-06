import { Box, Text, Button, Flex, Image, Grid, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Title from "./Title";

export const InfoSocis = function ({ quotes, quefem, queoferim }) {
  const router = useRouter();

  const CardQuota = (item) => {
    return (
      <Box
        borderRadius="21px"
        border="3px solid"
        borderColor="argila"
        p="20px"
        textAlign="center"
      >
        <Text
          mb="10px"
          color="argila"
          fontSize="xxxl"
          textTransform="uppercase"
          fontFamily="Oswald"
        >
          {item.tipus}
        </Text>
        <Text color="argila">{item.descripcio}</Text>
        <Text
          mb="10px"
          color="argila"
          fontSize="huge"
          fontWeight={600}
          textTransform="uppercase"
          fontFamily="Oswald"
        >
          {item.quota} €
        </Text>
        <Button
          w="200px"
          fontSize="normal"
          py="20px"
          border="1px solid"
          borderColor="argila"
          borderRadius="6px"
          bg="argila"
          color="blanc"
          _hover={{ bg: "white", color: "argila" }}
          _focus={{ boxShadow: "none" }}
          onClick={() => window.open(item.url)}
        >
          Vull fer-me soci {item.tipus}
        </Button>
      </Box>
    );
  };

  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} m="auto">
      <Title header="2" text="Per què tenim socis?"></Title>
      <Text mb="20px">
        Els Matossers de Molins de Rei tenim diferents vies de finançament per
        aconseguir mantenir l'activitat castellera a Molins de Rei i oferir els
        nostres castells arreu, una de les més importants és l'aportació de
        persones compromeses amb el fet casteller i amb la la vila de Molins de
        Rei, en forma de <strong>quotes anuals</strong>.
      </Text>
      <Text mb="20px">
        Per tal d'oferir la possibilitat que qualsevol persona pugui ser sòcia
        de l'entitat,{" "}
        <strong>
          hem establert diferents trams de quotes mínimes segons l'edat o
          l'estat laboral de la persona
        </strong>
        , així, tot i que la quota estàndard és per adults, els joves menors de
        25 anys i les persones jubilades gaudeixen d'una quota reduïda. Així
        mateix, establim també una <strong>quota familiar</strong>, que podran
        gaudir els membres que convisquin sota un mateix sostre, aquesta quota
        és{" "}
        <strong>
          especialment adequada per families de tres o més membres
        </strong>
        .
      </Text>
      <Title header="2" text="Quant he de pagar?"></Title>
      <Text my="20px">
        Cal dir que aquestes quotes són mínimes i que es podrien ampliar si el
        soci/a ho desitja.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          xxl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {quotes.map((quota, i) => {
          return CardQuota(quota);
        })}
      </Grid>
      <Text my="20px">
        Necessites ajuda o més informació?{" "}
        <Link href="/contacte" color="argila">
          Contacta'ns i resoldrem els teus dubtes.
        </Link>
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <Box
          borderRadius="21px"
          bg="argila"
          color="blanc"
          p="20px 40px"
          mt="40px"
          mb={{ base: "20px", xl: "40px" }}
        >
          <Title
            header="2"
            text="Què farem amb la teva aportació?"
            color="groc.brillant"
            textTransform="none"
          ></Title>
          <Flex
            w="100%"
            mt="20px"
            mb="30px"
            display={{base:"block", md:"flex"}}
          >
            <Box
              w={{ base: "100%", xl: "48%" }}
              mr={{ base: "0", xl: "2%" }}
              mb={{base:"30px", md:"0"}}
            >
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="50px"
                      m="auto"
                      src="/images/socis/hand.png"
                      alt="Fer castells"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Aixecar castells</Text>
                </Box>
              </Flex>
            </Box>
            <Box w={{ base: "100%", xl: "48%" }} ml={{ base: "0", xl: "2%" }}>
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="50px"
                      m="auto"
                      src="/images/socis/school-bus.png"
                      alt="Abaratir desplaçaments"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Abaratir els desplaçaments</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            w="100%"
            mt="20px"
            mb="20px"
            display={{base:"block", md:"flex"}}
          >
            <Box
              w={{ base: "100%", xl: "48%" }}
              mr={{ base: "0", xl: "2%" }}
              mb={{base:"30px", md:"0"}}
            >
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="46px"
                      m="auto"
                      src="/images/socis/home.png"
                      alt="Mantenir el local"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Mantenir el local social</Text>
                </Box>
              </Flex>
            </Box>
            <Box w={{ base: "100%", xl: "48%" }} ml={{ base: "0", xl: "2%" }}>
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="46px"
                      m="auto"
                      src="/images/socis/dance.png"
                      alt="Organitzar activitats"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Organitzar activitats socials</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          borderRadius="21px"
          bg="argila"
          color="blanc"
          p="20px 40px"
          my={{ base: "20px", xl: "40px" }}
        >
          <Title
            header="2"
            text="Què t'oferim?"
            color="groc.brillant"
            textTransform="none"
          ></Title>
          <Text fontSize="lg">Per ser soci gaudiràs de descomptes en:</Text>
          <Flex
            w="100%"
            mt="20px"
            mb="20px"
            display={{base:"block", md:"flex"}}
          >
            <Box
              w={{ base: "100%", xl: "48%" }}
              mr={{ base: "0", xl: "2%" }}
              mb={{base:"30px", md:"0"}}
            >
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="50px"
                      m="auto"
                      src="/images/socis/school-bus.png"
                      alt="Desplaçaments"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Desplaçaments</Text>
                </Box>
              </Flex>
            </Box>
            <Box w={{ base: "100%", xl: "48%" }} ml={{ base: "0", xl: "2%" }}>
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="46px"
                      m="auto"
                      src="/images/socis/restaurant.png"
                      alt="Àpats de la colla"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Àpats de la colla</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            w="100%"
            mt="20px"
            mb="20px"
            display={{base:"block", md:"flex"}}
          >
            <Box
              w={{ base: "100%", xl: "48%" }}
              mr={{ base: "0", xl: "2%" }}
              mb={{base:"30px", md:"0"}}
            >
              <Flex w="100%" alignItems="center">
                <Box w="23%" mr="2%">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="100%"
                    bg="blanc"
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                      w="46px"
                      m="auto"
                      src="/images/socis/sunrise.png"
                      alt="Activitats extraòrdinaries"
                    />
                  </Box>
                </Box>
                <Box w="73%" ml="2%">
                  <Text fontWeight={600}>Activitats extraòrdinaries</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};
export default InfoSocis;
