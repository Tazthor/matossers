import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import InfoSocis from "../components/InfoSocis";
import { Spinner } from "@chakra-ui/react";
import { initApp, getDataCollection } from "../utils/utils";

export default function Socis() {
  const context = useContext(userContext);
  const [isLoading, setIsLoading] = useState(true);
  const [app, setApp] = useState();
  const [dataQuota, setDataQuota] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "socis");
    setDataQuota(dades);
    setIsLoading(false);
    sortData();
  };

  const sortData = () => {
    setIsSorted(false);
    dataQuota = dataQuota.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    setIsSorted(true);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []);

  useEffect(() => {
    sortData();
  }, [dataQuota]);

  return (
    <Container>
      <Navbar page="socis" role={context.role} setRole={context.setRole} />
      <Margin desktop="130px" />
      <HeaderPages
        img="/images/headers/headersocis.jpg"
        textVisible={true}
        text="Socis"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      {(isLoading && !isSorted && (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      )) || <InfoSocis quotes={dataQuota}/>}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
