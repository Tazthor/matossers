import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import Topics from '../components/Topics';
import BlocText from '../components/BlocText';

export default function Home() {
  return (
    <Container>
      <Navbar />
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

      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Footer />
    </Container>
  );
}
