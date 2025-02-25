import { Box, Text, Button } from "@chakra-ui/react";

export const CardQuota = function ({ item }) {
  return (
    <Box
      borderRadius="21px"
      border="3px solid"
      borderColor="argila"
      p="20px"
      textAlign="center"
    >
      <Text
        mb="10px"
        color="argila"
        fontSize="xxxl"
        textTransform="uppercase"
        fontFamily="Oswald"
      >
        {item.tipus}
      </Text>
      <Text color="argila">{item.descripcio}</Text>
      <Text
        mb="10px"
        color="argila"
        fontSize="huge"
        fontWeight={600}
        textTransform="uppercase"
        fontFamily="Oswald"
      >
        {item.quota} €
      </Text>
      <Button
        variant="primary"
        size="normal"
        onClick={() => window.open(item.url)}
      >
        Vull fer-me soci {item.tipus}
      </Button>
    </Box>
  );
};

export default CardQuota;
