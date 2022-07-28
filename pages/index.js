import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import ProperaAct from '../components/ProperaAct';
import { Box, Flex } from '@chakra-ui/react'
import BannerContacte from '../components/BannerContacte';
import Footer from '../components/Footer';
import BlocXarxes from '../components/BlocXarxes';


export default function Home() {

  return (
    <Container>
      <Navbar />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/home/header.jpg"
        imgMbl="/images/home/headermbl.jpg"
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Flex w={["90%", "80%", "80%"]} maxW="2000px" m="auto" display={["block", "flex", "flex"]} py="50px">
        <Box w="48%" mr="2%">No se que posar aqui</Box>
        <Box w="48%" ml="2%">
          <ProperaAct />
        </Box>
      </Flex>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BannerContacte
        img="/images/home/contacte.jpg"
        imgMbl=""
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BlocXarxes/>
      <Footer/>
    </Container>
  )
}