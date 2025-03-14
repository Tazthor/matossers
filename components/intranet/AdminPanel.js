import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import Title from "../Title";
import { useRouter } from "next/router";

export default function AdminPanel() {
  const router = useRouter();
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" mt="40px">
      <Title header="3" text="Panell d'administració" color="argila" />
      <Grid
        w="100%"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        <Flex
          w="100%"
          minH="160px"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          my="30px"
          p="10px 20px"
          border="1px rgba(0, 0, 0, 0.3)"
          boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
          cursor="pointer"
          onClick={() => router.push("/intranet/admin/user-list")}
          borderTop="3px solid #663b30"
          textAlign="center"
        >
          <Text fontWeight="bold">Administració d&apos;usuaris</Text>
          <Text mt="20px" color="argila" fontSize="md">
            Edició de permisos i baixes d&apos;usuaris
          </Text>
        </Flex>
        <Flex
          w="100%"
          minH="160px"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          my="30px"
          p="10px 20px"
          border="1px rgba(0, 0, 0, 0.3)"
          boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
          cursor="pointer"
          onClick={() => router.push("/intranet/admin/casteller-list")}
          borderTop="3px solid #663b30"
          textAlign="center"
        >
          <Text fontWeight="bold">Administració de castellers</Text>
          <Text mt="20px" color="argila" fontSize="md">
            Properament
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
}
