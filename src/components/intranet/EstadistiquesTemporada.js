'use client';

import { useMemo, useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Progress,
  Separator,
  Badge,
  Icon
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp, FiCalendar } from "react-icons/fi";

// 🌟 Funció auxiliar per formatar Timestamps de Firestore a "DD/MM/YYYY"
function formatarDataTimestamp(data) {
  if (!data) return "Data no especificada";

  let d;
  // Si és un Timestamp de Firestore (té mètode toDate o propietat seconds)
  if (typeof data.toDate === "function") {
    d = data.toDate();
  } else if (data.seconds) {
    d = new Date(data.seconds * 1000);
  } else if (typeof data === "string" || data instanceof Date) {
    d = new Date(data);
  } else {
    return "Data no especificada";
  }

  if (isNaN(d.getTime())) return "Data no vàlida";

  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const any = d.getFullYear();

  return `${dia}/${mes}/${any}`;
}

export default function EstadistiquesCastells({ actuacions = [] }) {
  const [castellObert, setCastellObert] = useState(null);

  const estadistiques = useMemo(() => {
    const totalActuacions = actuacions.length;
    const comptador = {};
    let totalCastellsInscrits = 0;

    actuacions.forEach((actuacio) => {
      // 🌟 Apliquem la conversió de Timestamp aquí:
      const dataActuacio = formatarDataTimestamp(actuacio.data);
      const nomActuacio = actuacio.actuacio || "Actuació sense nom";
      
      const resultats = actuacio.resultat || [];

      resultats.forEach((item) => {
        const textBrut = (typeof item === "string" ? item : item.nom || item.castell || "").trim();
        if (!textBrut) return;

        let nomCastell = textBrut;
        let estat = "d";

        const textLower = textBrut.toLowerCase();

        if (textLower.startsWith("intent desmuntat de ")) {
          nomCastell = textBrut.replace(/^intent desmuntat de /i, "");
          estat = "id";
        } else if (textLower.startsWith("intent de ")) {
          nomCastell = textBrut.replace(/^intent de /i, "");
          estat = "i";
        } else if (textLower.endsWith(" carregat")) {
          nomCastell = textBrut.replace(/ carregat$/i, "");
          estat = "c";
        } else {
          estat = "d";
        }

        nomCastell = nomCastell.charAt(0).toUpperCase() + nomCastell.slice(1);

        if (!comptador[nomCastell]) {
          comptador[nomCastell] = {
            nom: nomCastell,
            descarregats: 0,
            carregats: 0,
            intents: 0,
            intentsDesmuntats: 0,
            total: 0,
            aparicions: []
          };
        }

        comptador[nomCastell].total++;
        totalCastellsInscrits++;

        if (estat === "d") comptador[nomCastell].descarregats++;
        else if (estat === "c") comptador[nomCastell].carregats++;
        else if (estat === "i") comptador[nomCastell].intents++;
        else if (estat === "id") comptador[nomCastell].intentsDesmuntats++;

        comptador[nomCastell].aparicions.push({
          data: dataActuacio, // Ja ve formatada com a string "DD/MM/YYYY"
          actuacio: nomActuacio,
          estat: estat
        });
      });
    });

    const llistatCastells = Object.values(comptador).sort((a, b) => b.total - a.total);

    return {
      totalActuacions,
      totalCastellsInscrits,
      llistat: llistatCastells
    };
  }, [actuacions]);

  const toggleCastell = (nom) => {
    setCastellObert(castellObert === nom ? null : nom);
  };

  return (
    <Box my="20px">
      <Heading size="md" mb={4} color="black">
        Balanç d&apos;actuacions i castells de la temporada
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={6}>
        <Box bg="marro.50" p={4} borderRadius="md" borderWidth="1px" borderColor="marro.100">
          <Text color="gris.900" fontWeight="bold" fontSize="sm">Total d&apos;Actuacions</Text>
          <Text color="argila" fontSize="3xl" fontWeight="extrabold">{estadistiques.totalActuacions}</Text>
          <Text fontSize="xs" color="gris.700">Diades realitzades aquesta temporada</Text>
        </Box>

        <Box bg="marro.50" p={4} borderRadius="md" borderWidth="1px" borderColor="marro.100">
          <Text color="gris.900" fontWeight="bold" fontSize="sm">Total de Castells Intentats</Text>
          <Text color="argila" fontSize="3xl" fontWeight="extrabold">{estadistiques.totalCastellsInscrits}</Text>
          <Text fontSize="xs" color="gris.700">Suma de tots els castells i pilars a plaça</Text>
        </Box>
      </SimpleGrid>

      <Separator mb={4} />

      <VStack align="stretch" spacing={4}>
        {estadistiques.llistat.map((castell) => {
          const isOpen = castellObert === castell.nom;

          return (
            <Box 
              key={castell.nom} 
              p={3} 
              borderRadius="md" 
              borderWidth="1px" 
              borderColor={isOpen ? "marro.300" : "gray.200"}
              bg={isOpen ? "marro.50/30" : "white"}
              transition="all 0.2s"
            >
              <HStack 
                justify="space-between" 
                cursor="pointer" 
                onClick={() => toggleCastell(castell.nom)}
              >
                <HStack spacing={2}>
                  <Text fontWeight="bold" color="gray.800" fontSize="md">
                    {castell.nom}
                  </Text>
                  <Text fontWeight="bold" fontSize="sm" color="argila">
                    ({castell.total} {castell.total === 1 ? 'fet' : 'fets'})
                  </Text>
                </HStack>

                <HStack spacing={3}>
                  <HStack spacing={1}>
                    {castell.descarregats > 0 && <Badge colorPalette="green" variant="subtle" fontSize="xs">{castell.descarregats} d</Badge>}
                    {castell.carregats > 0 && <Badge colorPalette="orange" variant="subtle" fontSize="xs">{castell.carregats} c</Badge>}
                    {castell.intentsDesmuntats > 0 && <Badge colorPalette="yellow" variant="subtle" fontSize="xs">{castell.intentsDesmuntats} id</Badge>}
                    {castell.intents > 0 && <Badge colorPalette="red" variant="subtle" fontSize="xs">{castell.intents} i</Badge>}
                  </HStack>
                  <Icon as={isOpen ? FiChevronUp : FiChevronDown} color="gray.500" />
                </HStack>
              </HStack>

              <Box mt={2} mb={isOpen ? 3 : 0}>
                <Progress.Root
                  value={
                    estadistiques.totalCastellsInscrits > 0
                      ? Math.round((castell.total / estadistiques.totalCastellsInscrits) * 100)
                      : 0
                  }
                  colorPalette="marro"
                  size="sm"
                >
                  <Progress.Track bg="marro.100" borderRadius="full">
                    <Progress.Range borderRadius="full" bg="marro.500" />
                  </Progress.Track>
                </Progress.Root>
              </Box>

              {isOpen && (
                <Box mt={3} pt={3} borderTopWidth="1px" borderColor="marro.100">
                  <Text fontSize="xs" fontWeight="bold" color="marro.500" mb={2}>
                    HISTORIAL D&apos;INTENTS:
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {castell.aparicions.map((ap, index) => (
                      <HStack key={index} justify="space-between" bg="white" p={2} borderRadius="sm" borderWidth="1px" borderColor="gray.100">
                        <HStack spacing={2}>
                          <Icon as={FiCalendar} color="gray.400" boxSize={3.5} />
                          <Text fontSize="xs" color="gray.600" fontWeight="medium">
                            {ap.data} — <Text as="span" color="gray.800">{ap.actuacio}</Text>
                          </Text>
                        </HStack>

                        {ap.estat === "d" && <Badge colorPalette="green" variant="solid" size="xs">Descarregat</Badge>}
                        {ap.estat === "c" && <Badge colorPalette="orange" variant="solid" size="xs">Carregat</Badge>}
                        {ap.estat === "id" && <Badge colorPalette="yellow" variant="solid" size="xs">Intent Desmuntat</Badge>}
                        {ap.estat === "i" && <Badge colorPalette="red" variant="solid" size="xs">Intent</Badge>}
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              )}
            </Box>
          );
        })}

        {estadistiques.totalActuacions === 0 && (
          <Text color="gray.400" textAlign="center" py={4}>
            No hi ha actuacions registrades.
          </Text>
        )}
      </VStack>
    </Box>
  );
}