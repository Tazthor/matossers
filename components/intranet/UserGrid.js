import { Box, Flex, Select, Text, Button, Spinner } from "@chakra-ui/react";
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
import { BsTrash3 } from "react-icons/bs";
import { useRouter } from "next/router";

export default function UserGrid({ data, handleValidateUser }) {
  const router = useRouter();

  return (
    <Flex flexDir="column" w="100%" alignItems="center">
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" mt="40px">
        <TableContainer>
          <Table variant="striped" colorScheme="marro">
            <Thead>
              <Tr>
                <Th>Nom</Th>
                <Th>Correu electrònic</Th>
                <Th>Permisos</Th>
                <Th>Opcions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user, i) => (
                <Tr key={i} color={user.role === "espera" ? "red" : "black"}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {user.role !== "espera" ? (
                      user.role
                    ) : (
                      <Button
                        onClick={async () => await handleValidateUser(user.uid)}
                        variant="primary"
                        size="short"
                        fontSize="sm"
                      >
                        Valida l&apos;usuari
                      </Button>
                    )}
                  </Td>
                  <Td>
                      <Flex
                        gap="2"
                        color="black"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <LiaUserEditSolid size="20px" />
                        <BsTrash3 size="20px"/>

                      </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Nom</Th>
                <Th>Correu electrònic</Th>
                <Th>Permisos</Th>
                <Th>Opcions</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

      </Box>
    </Flex>
  );
}
