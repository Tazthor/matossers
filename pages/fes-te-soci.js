import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from '../components/Title'
import Footer from '../components/Footer';
import InfoSocis from '../components/InfoSocis';
import { Box, Flex, Text, Image, List, ListItem } from '@chakra-ui/react'


export default function Musics() {

  return (
    <Container>
      <Navbar page="socis" />
      <Margin desktop="130px" />
      <HeaderPages
        img="/images/headers/headersocis.jpg"
        textVisible={true}
        text="Socis"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <InfoSocis/>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  )
}