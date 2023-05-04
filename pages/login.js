import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";
import {
  initApp,
  loginWithGoogle,
  getDataCollectionUser,
} from "../utils/utils";
import { loginEmailPassword, createAccount } from "../utils/login";
import { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbPassword } from "react-icons/tb";
import { AuthErrorCodes } from "firebase/auth";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Login = function () {
  const [signEmailPassword, setSignEmailPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ isError: false, msgError: "" });

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
  };

  const CreateUser = async function () {
    const response = await createAccount(email, pass);

    if (response.error) {
      openError("Hi ha hagut un error");
    }

    console.log(response);
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
      <Navbar />
      <Margin desktop="100px" />
      <Box w="100%" bg="argila" py="80px">
        {(signEmailPassword && (
          <Box
            w={{ base: "90%", md: "60%" }}
            bg="blanc"
            mx="auto"
            p="30px 20px"
          >
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
                    placeholder="Contrassenya"
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
              <Button type="submit" mt="30px" onClick={() => CreateUser()} disabled>
                Donar-se d'alta
              </Button>
            </form>
          </Box>
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
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Footer />
    </Container>
  );
};
export default Login;
