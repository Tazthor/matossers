import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import GridCalendari from "../components/GridCalendari";
import Footer from "../components/Footer";
import { initApp, getDataCollection } from "../utils/utils";
import { Spinner } from "@chakra-ui/react";

export default function Calendari() {
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
      <Navbar page="calendari" />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headercalendari.jpg"
        textVisible={true}
        text="Calendari d'actuacions"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      {isLoading ? (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      ) : (
        <GridCalendari actuacions={dataAct} />
      )}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
