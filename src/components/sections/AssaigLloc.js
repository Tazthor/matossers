"use client";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

const AssaigLloc = () => {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Heading
        fontSize={{ base: "xl", md: "xxl" }}
        lineHeight="normal"
        color="argila"
        textTransform="uppercase"
      >
        On assagem
      </Heading>
      <Flex w="100%" display={{ base: "block", md: "flex" }} mt="10px">
        <Box
          w={{ base: "100%", md: "58%" }}
          mr={{ base: "0", md: "2%" }}
          mb={{ base: "40px", md: "0" }}
        >
          <Text>
            Els Matossers assagem a Molins de Rei, a la{" "}
            <strong>Federació Obrera</strong>, un edifici històric i modernista
            que data de principis del segle XX, aquest edifici va ser construït
            pels propis veïns de la vila i s&apos;utilitzava com a centre
            d&apos;esbarjo, sindicat, cooperativa... pels membres de
            l&apos;associació obrera.
            <br />
            <br />
            Durant la dictadura franquista, l&apos;edifici fou confiscat pel
            règim i no fou retornat a la vila fins als anys 80, en molt mal
            estat de conservació.
            <br />
            <br />
            Actualment, l&apos;edifici ha remodelat tot el seu interior i
            s&apos;ha convertit en un centre cultural, on s&apos;hi generen
            vàries activitats, com per exemple la nostra, els castells.
            <br />
            <br />
            <strong>
              La Federació Obrera es troba al Carrer Jacint Verdaguer num. 48.
            </strong>{" "}
            Assagem dos cops per setmana un cop començada la temporada a la
            primera planta de l&apos;edifici a la Sala d&apos;activitats
            físiques / Castellòdrom, també disposem d&apos;una sala annexa on hi
            tenim guixetes, vestidor i un racó per la canalla.
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "38%" }} ml={{ base: "0", md: "2%" }}>
          <Image
            w="100%"
            src="/images/assajos/fede1.jpg"
            alt="Federació Obrera"
          />
        </Box>
      </Flex>
      <Flex w="100%" mt="60px" mx="auto" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.115936322827!2d2.016609415648985!3d41.415001902245244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49a8515762f01%3A0xb70aac8ef32ff68f!2sCentre+Cultural+de+la+Federaci%C3%B3+Obrera!5e0!3m2!1sca!2sus!4v1483448235410"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
        ></iframe>
      </Flex>
    </Box>
  );
};
export default AssaigLloc;
