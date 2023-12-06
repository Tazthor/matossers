import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import GridDades from "../components/GridDades";
import InfoSocis from "../components/InfoSocis";
import { Spinner } from "@chakra-ui/react";
import {
  initApp,
  getDataCollection,
  transformDataWithIcon,
} from "../utils/utils";
import { Flex, Box } from "@chakra-ui/react";

export default function Socis() {
  const context = useContext(userContext);
  const [isLoading, setIsLoading] = useState(true);
  const [app, setApp] = useState();
  const [dataQuota, setDataQuota] = useState([]);
  const [dataQueFarem, setDataQueFarem] = useState([]);
  const [dataQueOferim, setDataQueOferim] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "socis");
    const dadesQueFarem = await getDataCollection(app, "socisquefarem");
    const dadesQueOferim = await getDataCollection(app, "socisqueoferim");
    const dadesQueFarem_def = await transformDataWithIcon(dadesQueFarem);
    const dadesQueOferim_def = await transformDataWithIcon(dadesQueOferim);

    setDataQuota(dades);
    setDataQueFarem(dadesQueFarem_def);
    setDataQueOferim(dadesQueOferim_def);
    setIsLoading(false);
    sortData();
  };

  const sortData = () => {
    setIsSorted(false);
    dataQuota = dataQuota.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    dataQueFarem = dataQueFarem.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    dataQueOferim = dataQueOferim.sort((a, b) =>
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
  }, [dataQuota, dataQueFarem, dataQueOferim]);

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
      )) || (
        <>
          <InfoSocis
            quotes={dataQuota}
            quefem={dataQueFarem}
            queoferim={dataQueOferim}
          />
          <Flex
            w={{ base: "90%", md: "80%", xl: "75%" }}
            display={{ base: "block", md: "flex" }}
          >
            <Box
              w={{ base: "100%", md: "49%" }}
              mr={{ base: "0", md: "1%" }}
              mb={{base:"30px", md:"0"}}
              borderRadius="21px"
              bg="argila"
              p="2% 3%"
            >
            <GridDades
              titol="Què farem amb la teva aportació?"
              dades={dataQueFarem}
              items={{ sm: "1", md: "2", xl: "2" }}
              majuscules={false}
              invert
            />
            </Box>
            <Box
              w={{ base: "100%", md: "49%" }}
              ml={{ base: "0", md: "1%" }}
              mb={{base:"30px", md:"0"}}
              borderRadius="21px"
              bg="argila"
              p="2% 3%"
            >
            <GridDades
              titol="Què t'oferim?"
              subtitol="Per ser soci gaudiràs de descomptes en:"
              dades={dataQueOferim}
              items={{ sm: "1", md: "2", xl: "2" }}
              majuscules={false}
              invert
            />
            </Box>

          </Flex>
        </>
      )}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
