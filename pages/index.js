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


const Home = function ({insfeeds}) {
  const context = useContext(userContext);
  const [app, setApp] = useState();
  const [dataAct, setDataAct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (app) => {
    const object = await getDataCollection(app, "actuacions");
    object = object.sort((a, b) =>
      a.data > b.data ? 1 : b.data > a.data ? -1 : 0
    );
    setDataAct(object);
    setIsLoading(false);
  };


  useEffect(() => {
    if (app== undefined){ setApp(initApp());}
    getData(app);
  }, []);
  

  return (
    <Container>
      <Navbar role={context.role} setRole={context.setRole}/>
      <Margin desktop="130px" />
      <HeaderHome
        img="/images/home/header.jpg"
        imgMbl="/images/home/headermbl.jpg"
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Topics />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BlocText />
      <Flex w="100%" maxW="2000px" m="auto" display={{base:"block", xl:"flex"}} justifyContent="center">
        <Box w={{base:"100%", xl:"64%"}} mb={{base:"40px", xl:"0"}}>
          <Flickr/>
        </Box>
        <Box w={{base:"100%", xl:"360px"}} mb={{base:"40px", xl:"0"}} pt="50px" mx="auto">
          <GridCalendari actuacions={dataAct} properaOnly />
        </Box>
      </Flex>
      <Box id="contacte" className="anchor"/>
      <BannerContacte
        img="/images/home/contacte.jpg"
        imgMbl=""
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <BlocXarxes insfeeds={insfeeds}/>
      <Footer />
    </Container>
  );
}
export default Home;

/* export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalinkusername&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;

  const data = await fetch(url);
  const feed = await data.json();

  return { props: {insfeeds: feed} };
};
 */