import { Box, Text, Button } from "@chakra-ui/react";

export const RecursCard = function ({ recurs }) {
  return (
    <Box py="10px">
      <Text color="negre" fontWeight={600} fontSize="lg" fontFamily="Oswald">
        {recurs.nom}
      </Text>
      {recurs.descripcio && (
        <Box w="80%">
          <Text mt="6px">{recurs.descripcio}</Text>
        </Box>
      )}
      <Button
        mt="20px"
        w="200px"
        fontSize="md"
        py="20px"
        border="1px solid"
        borderColor="argila"
        borderRadius="6px"
        bg="argila"
        color="blanc"
        _hover={{ bg: "white", color: "argila" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => window.open(recurs.docUrl, "_blank")}
      >
        Descarregar
      </Button>
    </Box>
  );
};
export default RecursCard;
