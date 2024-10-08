import { Box, Text, Button } from "@chakra-ui/react";

export const CardQuota = function ({ item }) {
    console.log(item)
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
        w="200px"
        fontSize="normal"
        py="20px"
        border="1px solid"
        borderColor="argila"
        borderRadius="6px"
        bg="argila"
        color="blanc"
        _hover={{ bg: "white", color: "argila" }}
        _focus={{ boxShadow: "none" }}
        onClick={() => window.open(item.url)}
      >
        Vull fer-me soci {item.tipus}
      </Button>
    </Box>
  );
};

export default CardQuota;
