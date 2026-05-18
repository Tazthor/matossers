"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { loginWithGoogle } from "../../utils/login";
import { AuthErrorCodes } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
const [error, setError] = useState(undefined);

  const openError = function (msg, milisegons) {
    if (!milisegons) milisegons = 5000;
    setError(msg);
    setTimeout(closeError, milisegons);
  };

  const closeError = function () {
    setError(undefined);
  };

  const LoginGoogle = async function () {
    const response = await loginWithGoogle();
    if (response.error) {
      const msg =
        response.error.code === "custom/not-authorized"
          ? response.error.message
          : "Error en l'autenticació";

      openError(msg);
    } else {
      router.push("/intranet/cpanel");
    }
  };
  return (
    <>
      <Navbar page="inscripcio" />
      <Margin desktop="160px" />
      <Box textAlign="center" p={8} border="2px solid" borderColor="argila" maxW="400px" mx="auto">
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
            {error && (
                <Box
                    mt="20px"
                    p="10px"
                    color="red"
                >
                    {error}
                </Box>
            )}
        </Box>
      </Box>
      <Margin desktop="80px" />
    </>
  );
}
