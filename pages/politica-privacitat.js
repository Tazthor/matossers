import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import PolPrivacitat from "../components/PolPrivacitat";

export default function PoliticaPrivacitat() {
  return (
    <Container>
      <Navbar page="calendari" />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headercalendari.jpg"
        textVisible={true}
        text=""
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <PolPrivacitat/>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
