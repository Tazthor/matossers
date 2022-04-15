import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Juntes from '../components/Juntes';
import { Box, Flex } from '@chakra-ui/react'


export default function Calendari() {

  return (
    <Container>
      <Navbar page="quisom"/>
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/home/header.jpg"
        imgMbl="/images/home/headermbl.jpg"
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Juntes/>
    </Container>
  )
}