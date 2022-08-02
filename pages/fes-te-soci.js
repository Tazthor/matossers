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
      <Navbar page="socis" />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headersocis.jpg"
        textVisible={true}
        text="Socis"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box w={["90%", "80%", "75%"]} m="auto">
      </Box>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  )
}