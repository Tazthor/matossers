'use client';
import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Text, Spinner, Center } from "@chakra-ui/react";
import { getData } from "@/app/utils/utils";
import CastellerCard from "@/components/intranet/CastellerCard";

export default function EditCastellerPage() {
  const searchParams = useSearchParams();
  const dni = searchParams.get("dni"); 

  const [castellerData, setCastellerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!dni) {
      setLoading(false);
      return;
    }

    async function carregarDades() {
      try {
        setLoading(true);
        const data = await getData("castellers", dni);
        
        if (data) {
          setCastellerData(data);
        } else {
          setError(`No s'ha trobat cap casteller amb el DNI: ${dni}`);
        }
      } catch (err) {
        console.error("Error carregant casteller:", err);
        setError("S'ha produït un error en obtenir les dades.");
      } finally {
        setLoading(false);
      }
    }
    carregarDades();
  }, [dni]); 
  
  if (loading) {
    return (
      <Center p={12}>
        <Spinner size="xl" color="teal.500" />
        <Text ml={4}>Carregant fitxa...</Text>
      </Center>
    );
  }
  if (!dni || error) {
    return (
      <Box p={8}>
        <Text color="red.500" fontWeight="bold">
          {error || "Falta el paràmetre DNI a la URL (Exemple: ?dni=12345678A)"}
        </Text>
      </Box>
    );
  }
  return (
    <Box p={4}>
      <CastellerCard initialData={castellerData} />
    </Box>
  );
}