"use client";
import { useState, useEffect } from "react";
import { Grid, Box, Text, Button, Flex, Heading } from "@chakra-ui/react";
import Margin from "@/components/general/Margin";
import ActuacioCard from "./ActuacioCard";

export const GridCalendari = function ({ dataAct, isHome }) {
  const [actuacionsFutures, setActuacionsFutures] = useState(dataAct);
  const [actuacionsPassades, setActuacionsPassades] = useState(dataAct);
  var dateNow = new Date();
  const [isSorted, setIsSorted] = useState(false);
  var properaAct = dataAct.find(
    (actuacio) => actuacio.data.toDate() >= dateNow
  );
  var ultimaAct = dataAct.find((actuacio) => actuacio.data.toDate() <= dateNow);

  useEffect(() => {
    if (dataAct && dataAct.length > 0) {
      const sortedActuacionsFutures = [...dataAct].sort(
        (a, b) => a.data.seconds - b.data.seconds
      );
      const sortedActuacionsPassades = [...dataAct].sort(
        (a, b) => b.data.seconds - a.data.seconds
      );
      setActuacionsFutures(sortedActuacionsFutures);
      setActuacionsPassades(sortedActuacionsPassades);
      setIsSorted(true);
    }
  }, [dataAct]);

  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      {isHome ? (
        <>

          <Heading
            fontSize={{ base: "xl", md: "xl" }}
            lineHeight="normal"
            color="argila"
            textTransform="uppercase"
          >
            Última actuació
          </Heading>
          <Margin desktop="10px" />
          <ActuacioCard act={ultimaAct} type="passades" />
          <Margin desktop="30px" />
          <Heading
            fontSize={{ base: "xl", md: "xl" }}
            lineHeight="normal"
            color="argila"
            textTransform="uppercase"
          >
            Propera actuació
          </Heading>
          <Margin desktop="10px" />
          {properaAct == undefined ? (
            <Text>Actualment no hi ha actuacions previstes al calendari</Text>
          ) : (
            <ActuacioCard act={properaAct} type="futures" />
          )}
        </>
      ) : (
        <>
          <Heading
            fontSize={{ base: "xl", md: "xxl" }}
            lineHeight="normal"
            color="argila"
            textTransform="uppercase"
          >
            Properes actuacions
          </Heading>
          <Margin desktop="20px" mobile="10px" />

          {properaAct == undefined ? (
            <Text>Actualment no hi ha actuacions previstes al calendari</Text>
          ) : (
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={4}
            >
              {isSorted &&
                actuacionsFutures.map((act, index) => {
                  if (act.data.toDate() >= dateNow) {
                    return (
                      <ActuacioCard key={index} act={act} type="futures" />
                    );
                  }
                })}
            </Grid>
          )}
          <Margin desktop="40px" mobile="30px" />
          <Heading
            fontSize={{ base: "xl", md: "xxl" }}
            lineHeight="normal"
            color="argila"
            textTransform="uppercase"
          >
            Ultimes actuacions
          </Heading>
          <Margin desktop="20px" mobile="10px" />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {isSorted &&
              actuacionsPassades.map((act, index2) => {
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
