import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";
import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  loginEmailPassword,
  createAccount,
  loginWithGoogle,
} from "../utils/login";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { AuthErrorCodes } from "firebase/auth";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { FiCheck } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

export const Login = function () {
  const router = useRouter();
  const [signEmailPassword, setSignEmailPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ isError: false, msgError: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(userContext);

  const openError = function (msg) {
    setError({ isError: true, msgError: msg });
    setTimeout(closeError, 5000);
  };

  const closeError = function () {
    setError({ isError: false, msgError: "" });
  };

  const Login = async function ({ redirect }) {
    const response = await loginEmailPassword(email, pass);
    if (response.error) {
      if (
        response.error.code == AuthErrorCodes.INVALID_PASSWORD ||
        "wrong-password"
      ) {
        openError("La contrassenya és incorrecta. Torna-ho a provar");
      } else if (response.error.code == AuthErrorCodes.EMAIL_NOT_FOUND) {
        openError("Aquest usuari no existeix");
      } else openError(response.error.message);
    } else {
      context.setRole(response);
      if (redirect) {
        router.push("/");
      }
    }
  };

  const LoginGoogle = async function () {
    const response = await loginWithGoogle(email, pass);
    if (response.error) {
      if (response.error.code == AuthErrorCodes.INVALID_PASSWORD) {
        openError("La contrassenya és incorrecta. Torna-ho a provar");
      } else if (response.error.code == "auth/user-not-found") {
        openError("Aquest usuari no existeix");
      } else openError(response.error.message);
    } else {
      context.setRole(response);
      router.push("/");
    }
  };

  const CreateUser = async function () {
    const response = await createAccount(email, pass);
    if (response == true) {
      onOpen();
      Login({ redirect: false });
    } else {
      if (response.error.code == AuthErrorCodes.EMAIL_EXISTS) {
        openError("Aquest usuari ja existeix");
      }
      if (response.error.code == AuthErrorCodes.WEAK_PASSWORD) {
        openError("La contrasenya ha de tenir almneys 6 caràcters");
      } else openError("Hi ha hagut un error");
    }
  };

  return (
    <Container>
      <Navbar role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <Box w="100%" bg="argila" py="80px">
        <Box w="100%" textAlign="center" mb="20px">
          <Title header="1" text="Login" color="blanc"></Title>
        </Box>
        <Box
          w={{ base: "90%", md: "60%", xl: "30%" }}
          bg="blanc"
          mx="auto"
          p="30px 20px"
        >
          {(signEmailPassword && (
            <>
              <Text fontWeight={600} fontSize="medium">
                Introdueix les teves dades
              </Text>
              <form action="javascript:void(0);">
                <FormControl isRequired my="10px">
                  <InputGroup borderColor="argila">
                    <InputLeftElement pointerEvents="none">
                      <HiOutlineMail color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="Correu electrònic"
                      _placeholder={{ color: "argila" }}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired my="10px">
                  <InputGroup borderColor="argila">
                    <InputLeftElement pointerEvents="none">
                      <TbPassword color="gray.300" />
                    </InputLeftElement>
                    <Input
                      placeholder="Contrassenya"
                      type="password"
                      _placeholder={{ color: "argila" }}
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormControl>
                {error.isError && (
                  <Text w="100%" mt="15px" color="#ff0000" textAlign="center">
                    {error.msgError}
                  </Text>
                )}
                <Flex justifyContent="center">
                  <Button
                    type="submit"
                    my="15px"
                    px="10px"
                    borderRadius="8px"
                    borderColor="argila"
                    border="1px solid"
                    bg="argila"
                    color="#fff"
                    fontSize="md"
                    fontWeight={400}
                    _hover={{ backgroundColor: "transparent", color: "argila" }}
                    onClick={() => Login({ redirect: true })}
                  >
                    Inicia sessió
                  </Button>
                  <Button
                    type="submit"
                    my="15px"
                    mx="10px"
                    px="10px"
                    borderRadius="8px"
                    borderColor="argila"
                    border="1px solid"
                    bg="argila"
                    color="#fff"
                    fontSize="md"
                    fontWeight={400}
                    _hover={{ backgroundColor: "transparent", color: "argila" }}
                    onClick={() => CreateUser()}
                  >
                    Donar-se d&apos;alta
                  </Button>
                </Flex>
              </form>
              <Box
                textAlign="center"
                onClick={() => setSignEmailPassword(false)}
                cursor="pointer"
              >
                <Text color="argila" textDecoration="underline">
                  Torna al pas anterior
                </Text>
              </Box>
            </>
          )) || (
            <Box textAlign="center">
              <Image
                mx="auto"
                mb="20px"
                w="260px"
                src="/images/logos/logo.png"
                alt="Matossers de Molins de Rei"
              />
              <Box>
                <Button
                  border="1px solid"
                  borderColor="argila"
                  borderRadius="6px"
                  bg="transparent"
                  color="argila"
                  mr="20px"
                  onClick={() => LoginGoogle()}
                >
                  <Box mr="12px">
                    <FcGoogle size="25px" />
                  </Box>
                  Inicia sessió amb Google
                </Button>
              </Box>
              <Box
                cursor="pointer"
                onClick={() => setSignEmailPassword(true)}
                mt="20px"
              >
                <Text textDecoration="underline" color="argila">
                  o amb el teu correu electrònic
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box m="auto" w="90%" py="30px" textAlign="center">
              <Flex justifyContent="center">
                <FiCheck color="green" size="80px" />
              </Flex>
              <Text my="20px" fontWeight={600} fontSize="xl" lineHeight="30px">
                El teu usuari ha estat donat d&apos;alta correctament
              </Text>
              <Text lineHeight="20px" fontSize={"medium"}>
                L&apos;administrador et donarà els permisos corresponents en poc
                temps
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default Login;
