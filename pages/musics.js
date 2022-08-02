import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from '../components/Title'
import Footer from '../components/Footer';

import { Box, Flex, Text, Image, List, ListItem } from '@chakra-ui/react'


export default function Musics() {

  return (
    <Container>
      <Navbar page="musics" />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headermusics.jpg"
        textVisible={true}
        text="Músics"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box w={["90%", "80%", "75%"]} m="auto">
        <Title header="1" text="Músics"></Title>
        <Margin desktop="20px" mobile="6px" />
        <Box w="100%">
          <Text>
            La música té un paper imprescindible en l’activitat castellera i té presència en pràcticament tot el que es fa en una diada. La seva importància és especialment destacada en el moment de fer els castells, ja que la majoria d’integrants de la construcció no poden veure què està passant i depenen de la música dels instruments per saber-ho.
            <br /><br />
            Els Matossers de Molins de Rei tenim un grup de músics format per membres de totes les edats que toquem la gralla i el tabal. La voluntat del grup és la de dinamitzar les activitats de la colla i per fer-ho disposem d’un repertori divers, que combina cançons tradicionals catalanes amb cançons contemporànies arranjades pels instruments castellers. A més, cada any procurem estrenar alguna peça nova amb la voluntat de renovar el repertori.
            <br /><br />
            Els assajos de músics dels Matossers estan oberts a tothom qui vulgui tocar amb nosaltres i tingui prou nivell com per seguir l’assaig. Ens podreu trobar als bucs de la Federació Obrera de Molins:
          </Text>
          <List my="20px">
              <ListItem><strong>Dimecres:</strong> a les 20 h</ListItem>
              <ListItem><strong>Divendres:</strong> a les 12 h (no cada setmana) i a les 20 h</ListItem>
            </List>
        </Box>
      </Box>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  )
}