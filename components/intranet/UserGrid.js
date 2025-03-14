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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { LiaUserEditSolid } from "react-icons/lia";
import { BsTrash3 } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UserGrid({
  data,
  handleValidateUser,
  rmUser,
  isOpen,
  onOpen,
  onClose,
  changeRole,
}) {
  const router = useRouter();
  const [target, setTarget] = useState("");
  const permisos = ["admin", "casteller", "espera"];

  const openModal = function (uid) {
    setTarget(uid);
    onOpen();
  };

  const roleAdmin = (user) => {
    if (user.role === "admin") return <Text>{user.role} </Text>;
    else if (user.role === "espera")
      return (
        <Button
          onClick={async () => await handleValidateUser(user.uid)}
          variant="primary"
          size="short"
          fontSize="sm"
        >
          Valida l&apos;usuari
        </Button>
      );
    else
      return (
        <Select
          defaultValue={user.role}
          onChange={(e) => changeRole(user.uid, e.target.value)}
        >
          {permisos.map((permis, i) => {
            return (
              <option key={permis} value={permis}>
                {permis}
              </option>
            );
          })}
        </Select>
      );
  };


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
                <Tr key={i} color={user.role === "espera" ? "red" : "black"}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Flex alignItems="center" gap="1">
                      {roleAdmin(user)}
                    </Flex>
                  </Td>
                  <Td>{user.createdAt}</Td>
                  <Td>{user.lastLogin}</Td>

                  <Td>
                    <Flex
                      gap="2"
                      color="black"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box cursor="pointer" onClick={() => openModal(user.uid)}>
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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Box m="auto" w="90%" py="50px" textAlign="center">
                <Text lineHeight="20px" fontSize={"medium"}>
                  Vols eliminar aquest usuari també com a casteller?
                </Text>
                <Flex
                  mt="40px"
                  w="100%"
                  mx="auto"
                  justifyContent="center"
                  gap="4"
                >
                  <Button
                    variant="primary"
                    size="full"
                    onClick={() => rmUser(target, true)}
                  >
                    Sí
                  </Button>
                  <Button
                    variant="primary"
                    size="full"
                    onClick={() => rmUser(target, false)}
                  >
                    No, deixa&apos;l inactiu
                  </Button>
                </Flex>
                <Button
                  mt="20px"
                  variant="outline"
                  size="full"
                  onClick={() => onClose()}
                >
                  Cancel·lar
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}
