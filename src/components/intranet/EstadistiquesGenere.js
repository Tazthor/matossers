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

export default function EstadistiquesGenere({ castellers = [] }) {
  
  const estadistiques = useMemo(() => {
    // Inicialitzem els comptadors per a cada opció
    const comptador = {
      "Dones": 0,
      "Homes": 0,
      "Altres / Non-binari": 0,
      "No especificat": 0
    };
    
    let totalCastellers = 0;

    castellers.forEach((casteller) => {
      if (casteller.actiu !== false) {
        totalCastellers++;

        // Passem el valor a minúscules i netegem espais per evitar duplicats
        const genere = casteller.genere?.toLowerCase().trim();

        if (!genere) {
          comptador["No especificat"]++;
        } else if (genere === "dona" || genere === "femeni" || genere === "mujer" || genere === "w") {
          comptador["Dones"]++;
        } else if (genere === "home" || genere === "masculi" || genere === "hombre" || genere === "h") {
          comptador["Homes"]++;
        } else {
          comptador["Altres / Non-binari"]++;
        }
      }
    });

    // Convertim l'objecte en un array per renderitzar-lo
    const llistatGenere = Object.entries(comptador)
      // Opcional: amaguem "No especificat" si tothom té el gènere posat i està a 0
      .filter(([nom, quantitat]) => nom !== "No especificat" || quantitat > 0)
      .map(([nom, quantitat]) => ({
        nom,
        quantitat,
        percentatge: totalCastellers > 0 ? Math.round((quantitat / totalCastellers) * 100) : 0
      }))
      // Ordenem perquè surtin primer les opcions amb més volum de gent
      .sort((a, b) => b.quantitat - a.quantitat);

    return {
      llistat: llistatGenere,
      total: totalCastellers
    };
  }, [castellers]);

  return (
    <Box my="20px">
      <Heading size="md" mb={4} color="black">
        📊 Distribució per Gènere de la Colla
      </Heading>
      <Separator mb={4} />

      <VStack align="stretch" spacing={4}>
        {estadistiques.llistat.map((g) => (
          <Box key={g.nom}>
            <HStack justify="space-between" mb={1}>
              <Text fontWeight="medium" color="gray.600">
                {g.nom}
              </Text>
              <HStack spacing={2}>
                <Text fontWeight="bold" color="gray.700">
                  {g.quantitat}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  ({g.percentatge}%)
                </Text>
              </HStack>
            </HStack>
            
            {/* Barra de progrés amb el color de la camisa */}
            <Progress.Root value={g.percentatge} colorPalette="marro" size="sm">
              <Progress.Track bg="marro.100" borderRadius="full">
                <Progress.Range borderRadius="full" bg="marro.500" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}

        {estadistiques.total === 0 && (
          <Text color="gray.400" textAlign="center" py={4}>
            No hi ha dades disponibles per mostrar el gènere.
          </Text>
        )}
      </VStack>
    </Box>
  );
}