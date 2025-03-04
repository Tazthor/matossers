import { Box, Flex, Select, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { LiaUserEditSolid } from "react-icons/lia";

export default function UserGrid({ data }) {
  return (
    <Flex flexDir="column" w="100%" alignItems="center">
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" mt="40px">
        <TableContainer>
          <Table variant="striped" colorScheme="marro">
            <Thead>
              <Tr>
                <Th>Nom</Th>
                <Th>Correu electrònic</Th>
                <Th>Opcions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {user.role === "espera" && (
                      <>
                        <Text>Valida aquest usuari</Text>
                        <LiaUserEditSolid />
                      </>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Nom</Th>
                <Th>Correu electrònic</Th>
                <Th>Opcions</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>{" "}
      </Box>
    </Flex>
  );
}
