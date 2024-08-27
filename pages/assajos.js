import { useState, useContext } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { Box, Flex, Text, Image, List, ListItem } from "@chakra-ui/react";

export default function Calendari() {
  const context = useContext(userContext);

  return (
    <Container>
      <Navbar page="assajos" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headerassajos.jpg"
        textVisible={true}
        text="Assajos"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
        <Box w="100%">
          <Margin desktop="20px" mobile="6px" />
          <Title header="2" text="quan assagem?"></Title>
          <Flex display={{ base: "block", md: "flex" }}>
            <List my="30px" mr={{ base: "0", md: "15px" }}>
              <Title header="3" text="Dimecres" color="negre"></Title>
              <ListItem>
                <strong>Canalla:</strong> de 20 h a 21 h 
              </ListItem>
              <ListItem>
                <strong>Assaig general:</strong> de 21 h a 22:30 h
              </ListItem>
            </List>
            <List my="30px" ml={{ base: "0", md: "15px" }}>
              <Title header="3" text="Divendres" color="negre"></Title>
              <ListItem>
                <strong>Canalla:</strong> de 20 h a 21 h
              </ListItem>
              <ListItem>
                <strong>Assaig general:</strong> de 21 h a 23 h
              </ListItem>
            </List>
          </Flex>
        </Box>
        <Margin desktop="20px" mobile="6px" />
        <Flex w="100%" display={{ base: "block", xl: "flex" }}>
          <Box
            w={{ base: "100%", xl: "58%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "40px", xl: "0" }}
          >
            <Title header="2" text="on assagem?"></Title>
            <Margin desktop="20px" mobile="6px" />
            <Text>
              Els Matossers assagem a Molins de Rei, a la Federació Obrera, un
              edifici històric i modernista que data de principis del segle XX,
              aquest edifici va ser construït pels propis veïns de la vila i
              s'utilitzava com a centre d'esbarjo, sindicat, cooperativa... pels
              membres de l'associació obrera.
              <br />
              <br />
              Durant la dictadura franquista, l'edifici fou confiscat pel règim
              i no fou retornat a la vila fins als anys 80, en molt mal estat de
              conservació.
              <br />
              <br />
              Actualment, l'edifici ha remodelat tot el seu interior i s'ha
              convertit en un centre cultural, on s'hi generen vàries
              activitats, com per exemple la nostra, els castells.
              <br />
              <br />
              <strong>
                La Federació Obrera es troba al Carrer Jacint Verdaguer num. 48.
              </strong>{" "}
              Assagem dos cops per setmana un cop començada la temporada a la
              primera planta de l'edifici a la Sala d'activitats físiques /
              Castellòdrom, també disposem d'una sala annexa on hi tenim
              guixetes, vestidor i un racó per la canalla.
            </Text>
          </Box>
          <Box w={{ base: "100%", xl: "38%" }} ml={{ base: "0", xl: "2%" }}>
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
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
