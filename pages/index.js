import { useState, useContext } from "react";
import userContext from "../context/userContext";
import { Flex, Box } from "@chakra-ui/react";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import Topics from '../components/Topics';
import BlocText from '../components/BlocText';
import BannerContacte from '../components/BannerContacte';
import BlocXarxes from '../components/BlocXarxes';
import Flickr from '../components/Flickr';
import ProperaAct from '../components/ProperaAct';


export default function Home() {
  const context = useContext(userContext);

  return (
    <Container>
      <Navbar role={context.role}/>
      <Margin desktop="100px" />
      <HeaderHome
        img="/images/home/header.jpg"
        imgMbl="/images/home/headermbl.jpg"
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Topics />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BlocText />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Flex w={["90%", "80%", "80%"]} maxW="2000px" m="auto" display={["block", "block", "flex"]} py="50px">
        <Box w={["100%","100%","48%"]} mr="2%" mb={["40px","40px","0"]}>
          <Flickr/>
        </Box>
        <Box w={["100%","100%","48%"]} ml="2%" mb={["40px","40px","0"]}>
          <ProperaAct />
        </Box>
      </Flex>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box id="contacte" className="anchor"/>
      <BannerContacte
        img="/images/home/contacte.jpg"
        imgMbl=""
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BlocXarxes/>
      <Footer />
    </Container>
  );
}
