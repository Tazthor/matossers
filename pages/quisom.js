import { useEffect, useState } from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Container } from '../components/Container'
import Margin from '../components/Margin';
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Juntes from '../components/Juntes';
import Footer from '../components/Footer';
import DadesColla from '../components/DadesColla';
import { initApp, getDataCollection, getImages } from "../utils/utils";
import { Spinner } from "@chakra-ui/react";


export default function Calendari() {
  const [app, setApp] = useState();
  const [data, setData] = useState([]);
  const [junta, setJunta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const object = await getDataCollection(app, "dada");
    const juntes = await getDataCollection(app, "juntes");

    setData(object);
    setJunta(juntes)
    setIsLoading(false);
  };

  useEffect(() => {
    if (app== undefined){ setApp(initApp());}
    getData(app);
  }, []);


  return (
    <Container>
      <Navbar page="quisom" role={context.role} setRole={context.setRole}/>
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headerquisom.jpg"
        textVisible={true}
        text="Qui som?"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <DadesColla dades={data}/>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Juntes junta={junta}/>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  )
}