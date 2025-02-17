import { useState, useEffect } from "react";
import { Grid, Box, Text, Button, Flex } from "@chakra-ui/react";
import Margin from "./Margin";
import Title from "./Title";
import ActuacioCard from "./ActuacioCard";

export const GridCalendari = function ({ actuacions, properaOnly }) {
  var dateNow = new Date();
  const [isSorted, setIsSorted] = useState(false);

  var properaAct = actuacions.find(
    (actuacio) => actuacio.data.toDate() >= dateNow
  );
  
  useEffect(() => {
    actuacions = actuacions.sort((a, b) =>
      a.data > b.data ? 1 : b.data > a.data ? -1 : 0
    );
    setIsSorted(true);
  }, [actuacions]);

  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} m="auto">
      <Title header="2" text={(properaOnly) ? "Propera actuació" : "Properes actuacions"}></Title>
      <Margin desktop="40px" mobile="10px" />
      {(properaAct == undefined && (
        <Text>Actualment no hi ha actuacions previstes al calendari</Text>
      )) ||
        (properaOnly && <ActuacioCard act={properaAct} type="futures" />) || (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {isSorted &&
              actuacions.map((act, index) => {
                if (act.data.toDate() >= dateNow) {
                  return <ActuacioCard key={index} act={act} type="futures" />;
                }
              })}
          </Grid>
        )}
      {!properaOnly && (
        <>
          <Margin desktop="40px" mobile="30px" />
          <Title header="2" text="Darreres actuacions"></Title>
          <Margin desktop="40px" mobile="10px" />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {isSorted &&
              actuacions.map((act, index2) => {
                if (act.data.toDate() < dateNow) {
                  return (
                    <ActuacioCard key={index2} act={act} type="passades" />
                  );
                }
              })}
          </Grid>
        </>
      )}
    </Box>
  );
};
export default GridCalendari;
