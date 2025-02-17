import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";
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
} from "../../utils/login";
import { AuthErrorCodes } from "firebase/auth";
import { Container } from "../../components/Container";
import Margin from "../../components/Margin";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
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

/*   const Login = async function ({ redirect }) {
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
  }; */

  const LoginGoogle = async function () {
    const response = await loginWithGoogle(email, pass);
    if (response.error) {
      if (response.error.code == AuthErrorCodes.INVALID_PASSWORD) {
        openError("La contrassenya és incorrecta. Torna-ho a provar");
      } else if (response.error.code == "auth/user-not-found") {
        openError("Aquest usuari no existeix");
      } else openError(response.error.message);
    } else {
        if (response == "admin") {
            context.setRole(response);
          router.push("/intranet/provalist");
        }
    }
  };

/*   const CreateUser = async function () {
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
  }; */

  return (
    <Container>
      <Navbar role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <Box w="100%" py="40px">
        <Flex justifyContent="center" mb="20px">
          <Title
            header="2"
            text="AppMatossa'm"
            textTransform="none"
            color="argila"
          ></Title>
        </Flex>
        <Box
          w={{ base: "90%", md: "60%", xl: "30%" }}
          bg="blanc"
          mx="auto"
          p="30px 20px"
          border="2px solid"
          borderColor="argila"
          borderRadius="11px"
        >
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
          </Box>
        </Box>
      </Box>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Footer />
    </Container>
  );
};
export default Login;
