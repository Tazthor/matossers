'use client';

import { useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
  Separator
} from "@chakra-ui/react";

export default function EstadistiquesEdat({ castellers = [] }) {
  
  const estadistiques = useMemo(() => {
    const comptador = {
      "Canalla (0-15 anys)": 0,
      "Joves (16-25 anys)": 0,
      "Adults (26-70 anys)": 0,
      "Sènior (+70 anys)": 0,
      "No especificada": 0
    };
    
    let totalCastellers = 0;
    const anyActual = new Date().getFullYear();

castellers.forEach((casteller) => {
  if (casteller.actiu !== false) {
    totalCastellers++;

    if (!casteller.dataNaixement) {
      comptador["No especificada"]++;
      return;
    }

    let edat = -1;
    
    try {
      const parts = casteller.dataNaixement.split("/");
      
      if (parts.length === 3) {
        const dia = parseInt(parts[0], 10);
        const mes = parseInt(parts[1], 10) - 1; 
        const any = parseInt(parts[2], 10);

        const neixement = new Date(any, mes, dia);
        
        if (!isNaN(neixement.getTime())) {
          edat = anyActual - any;
          const mesActual = new Date().getMonth();
          const diaActual = new Date().getDate();
          
          if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
            edat--;
          }
        }
      }
    } catch (err) {
      console.error("Error processant la data:", casteller.dataNaixement, err);
    }

    if (edat >= 0 && edat <= 15) {
      comptador["Canalla (0-15 anys)"]++;
    } else if (edat >= 16 && edat <= 25) {
      comptador["Joves (16-25 anys)"]++;
    } else if (edat >= 26 && edat <= 70) {
      comptador["Adults (26-70 anys)"]++;
    } else if (edat > 70) {
      comptador["Sènior (+70 anys)"]++;
    } else {
      comptador["No especificada"]++;
    }
  }
});

    const llistatFranges = Object.entries(comptador)
      .filter(([nom, quantitat]) => nom !== "No especificada" || quantitat > 0)
      .map(([nom, quantitat]) => ({
        nom,
        quantitat,
        percentatge: totalCastellers > 0 ? Math.round((quantitat / totalCastellers) * 100) : 0
      }));

    return {
      llistat: llistatFranges,
      total: totalCastellers
    };
  }, [castellers]);

  return (
    <Box my="20px">
      <Heading size="md" mb={4} color="black">
        📊 Distribució per Edats de la Colla
      </Heading>

      <Separator mb={4} />

      <VStack align="stretch" spacing={4}>
        {estadistiques.llistat.map((franja) => (
          <Box key={franja.nom}>
            <HStack justify="space-between" mb={1}>
              <Text fontWeight="medium" color="gray.600">
                {franja.nom}
              </Text>
              <HStack spacing={2}>
                <Text fontWeight="bold" color="gray.700">
                  {franja.quantitat}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  ({franja.percentatge}%)
                </Text>
              </HStack>
            </HStack>
            
            {/* Barra de progrés amb el teu marró de la colla */}
            <Progress.Root value={franja.percentatge} colorPalette="marro" size="sm">
              <Progress.Track bg="marro.100" borderRadius="full">
                <Progress.Range borderRadius="full" bg="marro.500" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}

        {estadistiques.total === 0 && (
          <Text color="gray.400" textAlign="center" py={4}>
            No hi ha dades disponibles per mostrar les edats.
          </Text>
        )}
      </VStack>
    </Box>
  );
}