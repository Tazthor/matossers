"use client";
import { Box, Heading, SimpleGrid,  } from "@chakra-ui/react";

export default function CPanel() {
  return (
    <Box p={8}>
      <Heading mb={6}>Tauler de Control - Matossers</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
         Total Castellers
         142
      </SimpleGrid>
    </Box>
  );
}