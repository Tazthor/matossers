'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  Checkbox,
  Spinner,
  Heading,
  Link,
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export const FormContacte = function (props) {
  const [nom, setNom] = useState("");
  const [cognom, setCognom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [error, setError] = useState({ isError: false, msgError: "" });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = function () {
    setNom("");
    setCognom("");
    setEmail("");
    setPhone("");
    setMsg("");
    setGdpr(false);
  };

  const openError = function (msg, milisegons) {
    if (!milisegons) milisegons = 5000;
    setError({ isError: true, msgError: msg });
    setTimeout(closeError, milisegons);
  };

  const closeError = function () {
    setError({ isError: false, msgError: "" });
  };

  const validateForm = async function () {
    var errors = [];
    if (nom == "") {
      errors.push({
        error: true,
        message: "El camp Nom és obligatori",
      });
    }
    if (cognom == "") {
      errors.push({
        error: true,
        message: "El camp Cognom és obligatori",
      });
    }
    if (email == "") {
      errors.push({
        error: true,
        message: "El correu electrònic és obligatori",
      });
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      errors.push({
        error: true,
        message: "El correu electrònic no té un format correcte",
      });
    }
    const phoneRegex = /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/;
    const phoneRegex2 = /^\+?(7\d{2}|7[1-9]\d{1})\d{6}$/;
    const phoneRegex3 = /^\+?(9\d{2}|7[1-9]\d{1})\d{6}$/;
    if (phone != "") {
      if (
        !phoneRegex.test(phone) &&
        !phoneRegex2.test(phone) &&
        !phoneRegex3.test(phone)
      ) {
        errors.push({
          error: true,
          message: "El telèfon no té un format correcte",
        });
      }
    }
    if (msg == "") {
      errors.push({
        error: true,
        message: "No has escrit cap missatge",
      });
    }
    if (errors.length == 0) {
      if (!gdpr) {
        return {
          error: true,
          message: "Has d'acceptar la política de privacitat",
        };
      }
      return { error: false };
    } else if (errors.length == 1) return errors[0];
    else
      return {
        error: true,
        message: "Hi ha camps obligatoris buits al formulari",
      };
  };

  const submit = async function () {
    setIsLoading(true);
    var validate = await validateForm();
    if(validate.error){
      setIsLoading(false);
    }
    var emailParams = {
      nom,
      cognom,
      email,
      phone,
      msg,
    };
    if (!validate.error) {
      emailjs
        .send(
          "service_6wb1ojn",
          "template_rvvppa9",
          emailParams,
          "uwYpYFAtDFBm8Tr39"
        )
        .then(
          function (response) {
            setOpen(!open);
            resetForm();
            setIsLoading(false);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    } else {
      openError(validate.message, validate.ref, 3000);
    }
  };

  return (
    <Box
      w="100%"
      backgroundColor={props.negatiu ? "argila" : "#fff"}
      borderRadius="21px"
      py="40px"
      px="30px"
    >
      <Box mb="45px">
        <Heading
          fontSize={{ base: "xxl", md: "xxxl" }}
          lineHeight="normal"
          color={props.negatiu ? "blanc" : ["#fff", "#fff", "argila"]}
        >
          Contacta&apos;ns
        </Heading>
      </Box>
      <form action="javascript:void(0);">
        <Flex display={{ base: "block", xl: "flex" }}>
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "20px", xl: "50px" }}
          >
            <Text
              fontWeight={600}
              mb="10px"
              color={props.negatiu ? "groc.mat" : "argila"}
            >
              Nom *
            </Text>
            <Input
              w="90%"
              fontSize="normal"
              color={props.negatiu ? "blanc" : "negre"}
              border="0"
              borderRadius="0"
              borderBottom="1px solid"
              borderBottomColor={props.negatiu ? "blanc" : "argila"}
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </Box>
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "20px", xl: "50px" }}
          >
            <Text
              fontWeight={600}
              mb="10px"
              color={props.negatiu ? "groc.mat" : "argila"}
            >
              Cognoms *
            </Text>
            <Input
              w="90%"
              fontSize="normal"
              color={props.negatiu ? "blanc" : "negre"}
              border="0"
              borderRadius="0"
              borderBottom="1px solid"
              borderBottomColor={props.negatiu ? "blanc" : "argila"}
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setCognom(e.target.value)}
              value={cognom}
            />
          </Box>
        </Flex>
        <Flex display={{ base: "block", xl: "flex" }}>
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "20px", xl: "50px" }}
          >
            <Text
              fontWeight={600}
              mb="10px"
              color={props.negatiu ? "groc.mat" : "argila"}
            >
              Correu electrònic *
            </Text>
            <Input
              w="90%"
              type="email"
              color={props.negatiu ? "blanc" : "negre"}
              fontSize="normal"
              border="0"
              borderRadius="0"
              borderBottom="1px solid"
              borderBottomColor={props.negatiu ? "blanc" : "argila"}
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Box>
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "20px", xl: "50px" }}
          >
            <Text
              fontWeight={600}
              mb="10px"
              color={props.negatiu ? "groc.mat" : "argila"}
            >
              Telèfon
            </Text>
            <Input
              w="90%"
              color={props.negatiu ? "blanc" : "negre"}
              fontSize="normal"
              border="0"
              borderRadius="0"
              borderBottom="1px solid"
              borderBottomColor={props.negatiu ? "blanc" : "argila"}
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Box>
        </Flex>
        <Box w="100%" mr={{ base: "0", xl: "2%" }} mb={"50px"}>
          <Text
            fontWeight={600}
            mb="10px"
            color={props.negatiu ? "groc.mat" : "argila"}
          >
            Missatge *
          </Text>
          <Textarea
            w="95%"
            fontSize="normal"
            border="0"
            borderRadius="0"
            borderBottom="1px solid"
            borderBottomColor={props.negatiu ? "blanc" : "argila"}
            color={props.negatiu ? "blanc" : "negre"}
            _focus={{ boxShadow: "none" }}
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <Checkbox.Root
            colorPalette={props.negatiu ? "yellow" : "black"}
            onCheckedChange={() => setGdpr(!gdpr)}
            style={{ marginTop: "25px", marginBottom: "10px" }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label color={props.negatiu ? "blanc" : "negre"}>
              {" "}
              Accepto la{" "}
              <Link
                href="/politica-privacitat"
                color={props.negatiu ? "groc.mat" : "#663b30"}
                textDecoration="underline"
              >
                política de privacitat
              </Link>
            </Checkbox.Label>
          </Checkbox.Root>

          {error.isError && (
            <Text
              fontWeight={700}
              my="30px"
              color={props.negatiu ? "blanc" : "red"}
            >
              {error.msgError}
            </Text>
          )}
        </Box>
        <Button variant="primary" size="normal" onClick={submit} disabled={isLoading}>
          {isLoading ? <Spinner /> : "Envia"}
        </Button>
      </form>
      <Dialog.Root
        motionPreset="slide-in-bottom"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Body>
                <Flex
                  justifyContent="center"
                  alignItems="flex-start"
                  gap="20px"
                  mt="40px"
                  mb="20px"
                >
                  <FiCheck color="green" size="30px" />
                  <Box>
                    <Text fontWeight={600} fontSize="base" lineHeight="30px">
                      El teu correu electrònic ha estat enviat correctament
                    </Text>
                    <Text fontSize="md" lineHeight="20px">
                      Ens posarem en contacte amb tu el més aviat possible
                    </Text>
                  </Box>
                </Flex>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};
export default FormContacte;
