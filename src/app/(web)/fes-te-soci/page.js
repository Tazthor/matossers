"use client";
import { useState, useEffect } from "react";
import { Flex, Box, Spinner } from "@chakra-ui/react";
import { initApp, getDataCollection } from "../../utils/utils";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import InfoSocis from "@/components/sections/InfoSocis";
import GridDadesVertical from "@/components/sections/GridDadesvVertical";

export default function Page() {
  const app = initApp();
  const [dataQuota, setDataQuota] = useState([]);
  const [dataQueFarem, setDataQueFarem] = useState([]);
  const [dataQueOferim, setDataQueOferim] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const dadesQuota = await getDataCollection(app, "socis");
      const dadesQueFarem = await getDataCollection(app, "socisquefarem");
      const dadesQueOferim = await getDataCollection(app, "socisqueoferim");

      setDataQuota(
        dadesQuota.sort((a, b) =>
          a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0,
        ),
      );
      setDataQueFarem(
        dadesQueFarem.sort((a, b) =>
          a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0,
        ),
      );
      setDataQueOferim(
        dadesQueOferim.sort((a, b) =>
          a.ordre > b.ordre ? 1 : b.ordre > a.ordre ? -1 : 0,
        ),
      );
      setIsLoading(false);
    };

    getData();
  }, [app]);

  return (
    <>
      <Navbar page="socis" />
      <Margin desktop="120px" />
      <Header
        img="url('/images/headers/headersocis.jpg')"
        title="Fes-te'n soci"
      />
      <Margin desktop="60px" />
      {isLoading ? (
        <Flex w="100%" justifyContent="center">
          <Spinner
            color="argila"
            size="xl"
            emptyColor="gray.200"
            thickness="4px"
          />
        </Flex>
      ) : (
        <>
          <InfoSocis quotes={dataQuota} />
          <Margin desktop="60px" />
          <Flex
            w={{ base: "90%", md: "80%", xl: "75%" }}
            display={{ base: "block", md: "flex" }}
            mx="auto"
          >
            <Box
              w={{ base: "100%", md: "49%" }}
              mr={{ base: "0", md: "1%" }}
              mb={{ base: "30px", md: "0" }}
              borderRadius="21px"
              bg="argila"
              p="2% 3%"
            >
              <GridDadesVertical
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
              mb={{ base: "30px", md: "0" }}
              borderRadius="21px"
              bg="argila"
              p="2% 3%"
            >
              <GridDadesVertical
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
    </>
  );
}
