import { useContext } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";

import { Box, Flex, Text, Image, List, ListItem } from "@chakra-ui/react";

export default function Musics() {
  const context = useContext(userContext);

  return (
    <Container>
      <Navbar page="musics" role={context.role} setRole={context.setRole}/>
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headermusics.jpg"
        textVisible={true}
        text="Músics"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
        <Title header="2" text="Les nostres gralles i tabals"></Title>
        <Flex
          w="100%"
          justifyContent="center"
          display={["block", "block", "flex"]}
        >
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "30px", md: "0" }}
          >
            <Text>
              La música té un paper imprescindible en l’activitat castellera i
              té presència en pràcticament tot el que es fa en una diada. La
              seva importància és especialment destacada en el moment de fer els
              castells, ja que la majoria d’integrants de la construcció no
              poden veure què està passant i depenen de la música dels
              instruments per saber-ho.
              <br />
              <br />
              Els Matossers de Molins de Rei tenim un grup de músics format per
              membres de totes les edats que toquem la gralla i el tabal. La
              voluntat del grup és la de dinamitzar les activitats de la colla i
              per fer-ho disposem d’un repertori divers, que combina cançons
              tradicionals catalanes amb cançons contemporànies arranjades pels
              instruments castellers. A més, cada any procurem estrenar alguna
              peça nova amb la voluntat de renovar el repertori.
              <br />
              <br />
              Els assajos de músics dels Matossers estan oberts a tothom qui
              vulgui tocar amb nosaltres i tingui prou nivell com per seguir
              l’assaig. Ens podreu trobar als bucs de la Federació Obrera de
              Molins:
            </Text>
            <List my="20px">
              <ListItem>
                <strong>Dimecres:</strong> a les 20 h
              </ListItem>
              <ListItem>
                <strong>Divendres:</strong> a les 12 h (no cada setmana) i a les
                20 h
              </ListItem>
            </List>
          </Box>
          <Box
            w={{ base: "100%", xl: "48%" }}
            ml={{ base: "0", xl: "2%" }}
            mb={{ base: "30px", md: "0" }}
          >
            <Image src="/images/musics/musics.jpg" alt="Grallers i tabaleres" />
          </Box>
        </Flex>
      </Box>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
