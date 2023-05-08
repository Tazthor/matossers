import { useState, useContext, useEffect } from "react";
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
import GridCalendari from "../components/GridCalendari";
import { initApp, getDataCollection } from "../utils/utils";


export default function Home() {
  const context = useContext(userContext);
  const [app, setApp] = useState();
  const [dataAct, setDataAct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getData = async (app) => {
    const object = await getDataCollection(app, "actuacions");
    setDataAct(object);
    setIsLoading(false);
  };


  useEffect(() => {
    if (app== undefined){ setApp(initApp());}
    getData(app);
  }, []);

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
      <Flex w={{base:"90%", md:"80%"}} maxW="2000px" m="auto" display={{base:"block", xl:"flex"}} py="50px">
        <Box w={{base:"100%", xl:"48%"}} mr="2%" mb={{base:"40px", xl:"0"}}>
          <Flickr/>
        </Box>
        <Box w={{base:"100%", xl:"48%"}} ml="2%" mb={{base:"40px", xl:"0"}}>
          <GridCalendari actuacions={dataAct} properaOnly />
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
