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
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { loginEmailPassword, createAccount } from "../utils/login";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { AuthErrorCodes } from "firebase/auth";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import {FiCheck} from "react-icons/fi"

export const Login = function () {
  const [signEmailPassword, setSignEmailPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ isError: false, msgError: "" });
  const { isOpen, onOpen, onClose } = useDisclosure()
  const context = useContext(userContext);

  const openError = function (msg) {
    setError({ isError: true, msgError: msg });
    setTimeout(closeError, 5000);
  };

  const closeError = function () {
    setError({ isError: false, msgError: "" });
  };

  const Login = async function () {
    const response = await loginEmailPassword(email, pass);
    if (response.error) {
      if (
        response.error.code == AuthErrorCodes.INVALID_PASSWORD ||
        "wrong-password"
      ) {
        openError("La contrassenya és incorrecta. Torna-ho a provar");
      } else if (response.error.code == "auth/user-not-found") {
        openError("Aquest usuari no existeix");
      } else openError(response.error.message);
    }
    context.setRole(response)
  };

  const CreateUser = async function () {
    const response = await createAccount(email, pass);
    if (response == true) {
      onOpen();
    } else if (response.error) {
      if (response.error.code == AuthErrorCodes.EMAIL_EXISTS) {
        openError("Aquest usuari ja existeix");
      } else openError("Hi ha hagut un error");
    }
  };

  /*   const [user, setUser] = useState(null);
  const [app, setApp] = useState();
  const [currentUser, setCurrentUser] = useState(null);



  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
  }, []);

  const getDataUser = async (app, user) => {
    console.log(user);
    const object = await getDataCollectionUser(app, "users", user);

    setCurrentUser(object);
  };

  const Googleclic = async () => {
    const usuaritemp = await loginWithGoogle(app);
    if (usuaritemp) {
      setUser(usuaritemp);
      getDataUser(app, user);
    }
  };
 */
  return (
    <Container>
      <Navbar role={context.role} setRole={context.setRole}/>
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
            <form action="javascript:void(0);">
              <FormControl isRequired my="10px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<HiOutlineMail color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Correu electrònic"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired my="10px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbPassword color="gray.300" />}
                  />
                  <Input
                    placeholder="Contrassenya" type="password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              {error.isError && (
                <Text w="100%" mt="15px" color="#ff0000" textAlign="center">
                  {error.msgError}
                </Text>
              )}

              <Button type="submit" mt="30px" onClick={() => Login()}>
                Inicia sessió
              </Button>
              <Button type="submit" mt="30px" onClick={() => CreateUser()}>
                Donar-se d'alta
              </Button>
            </form>
          )) || (
            <Flex>
              {/*     <Button mr="20px" onClick={() => Googleclic()}>Google</Button>
               */}{" "}
              <Button onClick={() => setSignEmailPassword(true)}>
                Email/Pwd
              </Button>
            </Flex>
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
            <Box w="90%" py="30px" textAlign="center">
              <Flex justifyContent="center"><FiCheck color="green" size="80px"/></Flex>
              <Text my="20px" fontWeight={600} fontSize="xl" lineHeight="30px">El teu usuari ha estat donat d'alta correctament</Text>
              <Text lineHeight="20px" fontSize={"medium"}>L'administrador et donarà els permisos corresponents en poc temps</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default Login;
