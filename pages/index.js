import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";


export default function Home() {

  return (
    <Container>
      <Navbar />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/home/headerhome.jpg"
        imgMbl=""
        titleVisible={true}
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
    </Container>
  )
}