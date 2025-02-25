import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";

import { loginWithGoogle } from "../../utils/login";
import { AuthErrorCodes } from "firebase/auth";
import { Container } from "../../components/Container";
import Margin from "../../components/Margin";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

export const Login = function () {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const context = useContext(userContext);
  const [currentUser, setCurrentUser] = useState(null);

  const LoginGoogle = async function () {
    const response = await loginWithGoogle(email, pass);
    if (response.error) {
      setError("Alguna cosa ha anat malament. Torna-ho a intentar.");
    } else {
      context.setUser({
        uid: response.uid,
        email: response.email,
        name: response.name,
        role: response.role,
      });
    }
  };

  useEffect(() => {
    if (context.user?.role === "espera") {
      setError("L'usuari ha estat creat correctament, però la colla encara l'ha de validar.");
    } else if (
      context.user?.role === "admin" ||
      context.user?.role === "casteller" ||
      context.user?.role === "tecnica"
    ) {
      router.push("/intranet/panell");
    }
  }, [context.user, router]);

  return (
    <Container>
      <Navbar role={context.user.role} />
      <Margin desktop="100px" />
      <Box w="100%" py="40px">
        {(error && (
          <Flex
            flexDir={"column"}
            w={{ base: "90%", md: "60%", xl: "30%" }}
            textAlign="center"
            mx="auto"
            my="80px"
          >
            <Title
              header="2"
              color="argila"
              textAlign="center"
              mb="20px"
              text={error}
            />
            <Button
              mt="30px"
              variant="primary"
              size="auto"
              onClick={() => router.reload()}
            >
              Actualitza
            </Button>
          </Flex>
        )) || (
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={{ base: "90%", md: "60%", xl: "30%" }}
            bg="blanc"
            mx="auto"
            p="30px 20px"
            border="2px solid"
            borderColor="argila"
            borderRadius="11px"
          >
            <Title
              header="2"
              text="AppMatossa'm"
              textTransform="none"
              color="argila"
            />

            <Image
              mx="auto"
              my="20px"
              mb="20px"
              w="230px"
              src="/images/logos/logo.png"
              alt="Matossers de Molins de Rei"
            />
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
          </Flex>
        )}
      </Box>
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Footer />
    </Container>
  );
};
export default Login;
