import { useEffect, useState } from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Juntes from "../components/Juntes";
import Footer from "../components/Footer";
import GridDades from "../components/GridDades";
import {
  initApp,
  getDataCollection,
  transformDataWithImages,
  transformDataWithIcon,
} from "../utils/utils";
import { Spinner } from "@chakra-ui/react";

export default function Calendari() {
  const [app, setApp] = useState();
  const [data, setData] = useState([]);
  const [junta, setJunta] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingJuntes, setIsLoadingJuntes] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "dada");
    //const dades_def = await transformDataWithIcon(dades);
    setData(dades);
    setIsLoadingData(false);

    const juntes = await getDataCollection(app, "juntes");
    //const junta_def = await transformDataWithImages(juntes);
    setJunta(juntes);
    setIsLoadingJuntes(false);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []);

  return (
    <Container>
      <Navbar page="quisom" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headerquisom.jpg"
        textVisible={true}
        text="Qui som?"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      {isLoadingData ? (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      ) : (
        <GridDades
          titol="La colla"
          dades={data}
          hasImage
          imageName="Camisa"
          imageUlr="/images/camisa.png"
          items= {{sm:"1", md:"2", xl:"3"}}
        />
      )}

      <Margin desktop="40px" tablet="50px" mobile="20px" />
      {isLoadingJuntes ? <></> : <Juntes junta={junta} />}

      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
