'use client';

import { useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Progress,
  Separator
} from "@chakra-ui/react";

export default function EstadistiquesPoblacio({ castellers = [] }) {
  
  const estadistiques = useMemo(() => {
    const comptador = {};
    let totalCastellers = 0;

    castellers.forEach((casteller) => {
      if (casteller.actiu !== false) {
        const poblacio = casteller.poblacio?.trim() || "No especificada";
        const poblacioFormatada = poblacio.charAt(0).toUpperCase() + poblacio.slice(1);
        
        comptador[poblacioFormatada] = (comptador[poblacioFormatada] || 0) + 1;
        totalCastellers++;
      }
    });

    const llistatOrdenat = Object.entries(comptador)
      .map(([nom, quantitat]) => ({
        nom,
        quantitat,
        percentatge: totalCastellers > 0 ? Math.round((quantitat / totalCastellers) * 100) : 0
      }))
      .sort((a, b) => b.quantitat - a.quantitat);

    return {
      llistat: llistatOrdenat,
      total: totalCastellers,
      poblesDiferents: llistatOrdenat.length
    };
  }, [castellers]);

  return (
    <Box my="20px">
      <Heading size="md" mb={4} color="black">
        📊 Distribució Geogràfica de la Colla
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={6}>

        <Box bg="marro.50" p={4} borderRadius="md" borderWidth="1px" borderColor="marro.100">
          <Text color="gris.900" fontWeight="bold" fontSize="sm">Municipis Diferents</Text>
          <Text color="argila" fontSize="3xl" fontWeight="extrabold">{estadistiques.poblesDiferents}</Text>
          <Text fontSize="xs" color="gris.700">D&apos;on prové la gent de la colla</Text>
        </Box>
      </SimpleGrid>

      <Separator mb={4} />
      <VStack align="stretch" spacing={4}>
        {estadistiques.llistat.map((poble) => (
          <Box key={poble.nom}>
            <HStack justify="space-between" mb={1}>
              <Text fontWeight="medium" color="gray.600">
                {poble.nom}
              </Text>
              <HStack spacing={2}>
                <Text fontWeight="bold" color="gray.700">
                  {poble.quantitat}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  ({poble.percentatge}%)
                </Text>
              </HStack>
            </HStack>
            
            {/* Progress a la v3 simplificat */}
            <Progress.Root value={poble.percentatge} colorPalette="marro" size="sm">
              <Progress.Track bg="marro.100" borderRadius="full">
                <Progress.Range borderRadius="full" bg="marro.500" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}

        {estadistiques.total === 0 && (
          <Text color="gray.400" textAlign="center" py={4}>
            No hi ha dades disponibles per mostrar estadístiques.
          </Text>
        )}
      </VStack>
    </Box>
  );
}