import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Footer from "../components/Footer";
import {
  initApp,
  getDataCollection,
  transformDataWithImages,
} from "../utils/utils";
import { Spinner } from "@chakra-ui/react";
import InfoMusics from "../components/InfoMusics";

export default function Musics() {
  const [app, setApp] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "musics");
    const dades_def = await transformDataWithImages(dades);
    setData(dades_def[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []);
  
  return (
    <Container>
      <Navbar page="musics" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headermusics.jpg"
        textVisible={true}
        text="Músics"
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
        <InfoMusics data={data} />
      )}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
