import { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import RecursCard from "../components/RecursCard";
import ActuacioCardRecurs from "../components/ActuacioCardRecurs";
import {
  initApp,
  getDataCollection,
  transformDataWithDoc,
} from "../utils/utils";
import { Box, Grid, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Recursos() {
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [app, setApp] = useState();
  const [dataRecurs, setDataRecurs] = useState([]);
  const [dataAct, setDataAct] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "recurs");
    const dades_def = await transformDataWithDoc(dades);
    const actuacions = await getDataCollection(app, "actuacions");
    setDataRecurs(dades_def);
    setDataAct(actuacions);
    setIsLoading(false);
  };


  useEffect(() => {
    if (context.role == "public" || context.role == "default") {
      router.push("/");
    } else {
      if (app == undefined) {
        setApp(initApp());
      }
      getData(app);
    }
  }, []);

  useEffect(() => {
    dataRecurs = dataRecurs.sort((a, b) =>
      a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0
    );
    dataAct = dataAct.sort((a, b) =>
      a.data > b.data ? 1 : b.data > a.data ? -1 : 0
    );
    setIsSorted(true);
  }, [dataRecurs, dataAct]);

  return (
    <Container>
      <Navbar page="recursos" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headermusics.jpg"
        textVisible={true}
        text="Recursos"
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
          <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
            <Box mb="30px">
              <Box mb="10px">
                <Title header="2" text="Llistes d'assistència"></Title>
              </Box>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                  xxl: "repeat(4, 1fr)",
                }}
                gap={8}
              >
                {isSorted &&
                  dataAct.map((act, index) => {
                    if (act.data.toDate() >= new Date() && act.llista) {
                      return (
                        <ActuacioCardRecurs
                          key={index}
                          act={act}
                          type="futures"
                        />
                      );
                    }
                  })}
              </Grid>

              <Box mb="10px">
                <Title header="2" text="Documents legals"></Title>
              </Box>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                  xxl: "repeat(4, 1fr)",
                }}
                gap={8}
              >
                {dataRecurs.map((recurs, i) => {
                  if (recurs.categoria == "administrativa") {
                    return <RecursCard key={i} recurs={recurs} />;
                  }
                })}
              </Grid>
            </Box>
            {(context.role == "admin" || context.role == "tecnica") && (
              <Box mb="30px">
                <Box mb="10px">
                  <Title header="2" text="Documents de tècnica"></Title>
                </Box>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    xl: "repeat(3, 1fr)",
                    xxl: "repeat(4, 1fr)",
                  }}
                  gap={8}
                >
                  {dataRecurs.map((recurs, i) => {
                    if (recurs.categoria == "tecnica") {
                      return <RecursCard key={i} recurs={recurs} />;
                    }
                  })}
                </Grid>
              </Box>
            )}
          </Box>
        </>
      )}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
