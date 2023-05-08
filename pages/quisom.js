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
import { initApp, getDataCollection } from "../utils/utils";
import { Spinner } from "@chakra-ui/react";


export default function Calendari() {
  const [app, setApp] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const object = await getDataCollection(app, "dada");
    setData(object);
    setIsLoading(false);
  };


  useEffect(() => {
    if (app== undefined){ setApp(initApp());}
    getData(app);
  }, []);

  console.log(data)
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
      <DadesColla/>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Juntes/>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  )
}