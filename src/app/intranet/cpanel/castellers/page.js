"use client";
import { useEffect, useState } from "react";
import { getDataCollection } from "@/app/utils/utils";
import CastellersTable from "@/components/intranet/CastellersTable";
import { Box, Heading, Spinner, Center, Text } from "@chakra-ui/react";

export default function CastellersPage() {
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

  if (loading) {
    return (
      <Center h="200px">
        <Spinner color="argila" size="xl" />
      </Center>
    );
  }

  return (
    <Box>
      <Heading mb={6} size="lg" color="gray.700">Llistat de Castellers</Heading>
      {castellers.length === 0 ? (
        <Text>No hi ha castellers registrats encara.</Text>
      ) : (
        <CastellersTable data={castellers} />
      )}
    </Box>
  );
}