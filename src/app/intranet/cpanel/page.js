"use client";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getDataCollection } from "@/app/utils/utils";
import EstadistiquesPoblacio from "@/components/intranet/EstadistiquesPobles";
import EstadistiquesEdat from "@/components/intranet/EstadistiquesEdat";
import EstadistiquesGenere from "@/components/intranet/EstadistiquesGenere";

export default function CPanel() {
  const [castellers, setCastellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCastellers = async () => {
      try {
        const data = await getDataCollection("castellers");
        setCastellers(data);
      } catch (error) {
        console.error("Error carregant castellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCastellers();
  }, []);

  return (
    <Box p={8}>
      <Heading mb={6}>Tauler de Control - Matossers</Heading>
      {loading ? (
        <Box>Carregant dades...</Box>
      ) : (
        <>
          <Box
            bg="marro.50"
            p={4}
            borderRadius="md"
            borderWidth="1px"
            borderColor="marro.100"
          >
            <Text color="gris.900" fontWeight="bold" fontSize="sm">
              Total Castellers Actius
            </Text>
            <Text color="argila" fontSize="3xl" fontWeight="extrabold">
              {castellers.length}
            </Text>
          </Box>
          <Flex
            w="100%"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            gap={6}
            mt={6}
          >
            <Box w="100%">
              <EstadistiquesGenere castellers={castellers} />
              <EstadistiquesEdat castellers={castellers} />
            </Box>
            <Box w="100%">
              <EstadistiquesPoblacio castellers={castellers} />
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
}
