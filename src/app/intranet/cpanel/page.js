"use client";
import { Box, Heading, SimpleGrid,  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getDataCollection } from "@/app/utils/utils";

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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          Total Castellers: {" "}{castellers.length}
        </SimpleGrid>
      )}
    </Box>
  );
}