"use client";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getDataCollection } from "@/app/utils/utils";
import EstadistiquesPoblacio from "@/components/intranet/EstadistiquesPobles";
import EstadistiquesEdat from "@/components/intranet/EstadistiquesEdat";
import EstadistiquesGenere from "@/components/intranet/EstadistiquesGenere";
import EstadistiquesTemporada from "@/components/intranet/EstadistiquesTemporada";

export default function CPanel() {
  const [actuacions, setActuacions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        const fetchActuacions = async () => {
      try {
        const data = await getDataCollection("actuacions");
        setActuacions(data);
      } catch (error) {
        console.error("Error carregant actuacions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActuacions();
  }, []);

  return (
    <Box p={8}>
      <Heading mb={6}>Tauler de Control - Matossers</Heading>
      {loading ? (
        <Box>Carregant dades...</Box>
      ) : (
        <>
          <Box
            p={4}
            borderRadius="md"
            borderWidth="1px"
            borderColor="marro.100"
          >
          <Box w="100%" mt={6}>
            <EstadistiquesTemporada actuacions={actuacions} />
          </Box>
          </Box>
        </>
      )}  
    </Box>
  );
}
