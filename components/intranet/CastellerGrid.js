import {
  Box,
  Flex,
  Select,
  Text,
  Button,
  Spinner,
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
import { useState } from "react";

export default function CastellerGrid({
  data,
}) {
  const router = useRouter();


 
  return (
    <Flex flexDir="column" w="100%" alignItems="center">
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" mt="40px">
        <TableContainer>
          <Table variant="striped" colorScheme="marro" fontSize="md">
            <Thead>
              <Tr>
                <Th>Nom</Th>
                <Th>Correu electrònic</Th>
                <Th>Permisos</Th>
                <Th>Creat:</Th>
                <Th>Última connexió</Th>
                <Th>Opcions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user, i) => (
                <Tr key={i}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.actiu}</Td>

                  <Td>
                    <Flex
                      gap="2"
                      color="black"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box cursor="pointer" /* onClick={() => openModal(user.uid)} */>
                        <BsTrash3 size="20px" />
                      </Box>
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
                <Th>Creat:</Th>
                <Th>Última connexió</Th>
                <Th>Opcions</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}
