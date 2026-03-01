"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  HStack,
  RadioGroup,
  Checkbox,
  Spinner,
  Heading,
  Link,
  Dialog,
  Portal,
  CloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { ca } from "date-fns/locale";
import { validateAltaForm } from "@/app/utils/utilsform";

export const FormAlta = function () {
  const [nom, setNom] = useState("");
  const [cognom, setCognom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [malnom, setMalnom] = useState("");
  const [adreca, setAdreca] = useState("");
  const [poblacio, setPoblacio] = useState("");
  const [cp, setCp] = useState("");
  const [dni, setDni] = useState("");
  const [professio, setProfessio] = useState("");
  const [centreEducatiu, setCentreEducatiu] = useState("");
  const [dataNaixement, setDataNaixement] = useState(undefined);
  const [majorEdat, setMajorEdat] = useState("");
  const [msg, setMsg] = useState("");
  const [genere, setGenere] = useState("");
  const [tutor, setTutor] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [error, setError] = useState({ isError: false, msgError: "" });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const monthNames = [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Agost",
    "Setembre",
    "Octubre",
    "Novembre",
    "Desembre",
  ];

  const genereList = [
    { label: "Dona", value: "dona" },
    { label: "Home", value: "home" },
    { label: "No binari", value: "nobinari" },
  ];

  useEffect(() => {
    if (!dataNaixement) return;

    const avui = new Date();
    const naixement = new Date(dataNaixement);

    let edat = avui.getFullYear() - naixement.getFullYear();
    const mes = avui.getMonth() - naixement.getMonth();

    if (mes < 0 || (mes === 0 && avui.getDate() < naixement.getDate())) {
      edat--;
    }
    if (edat >= 18) {
      setMajorEdat(true);
    } else {
      setMajorEdat(false);
    }
  }, [dataNaixement]);

  const resetForm = function () {
    setNom("");
    setMalnom("");
    setCognom("");
    setEmail("");
    setPhone("");
    setAdreca("");
    setPoblacio("");
    setCp("");
    setDni("");
    setProfessio("");
    setCentreEducatiu("");
    setDataNaixement("");
    setGenere("");
    setMajorEdat("");
    setTutor("");
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

  const submit = async function () {
    setIsLoading(true);
    const dataForm = {
      nom,
      cognom,
      email,
      phone,
      adreca,
      poblacio,
      cp,
      dni,
      professio,
      centreEducatiu,
      dataNaixement: dataNaixement.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" }),
      genere,
      tutor,
      msg
    }
    console.log('hola', dataForm)
    var validate = await validateAltaForm(dataForm, majorEdat);
    if (validate.error) {
      setIsLoading(false);
    }

/*     if (!validate.error) {
      emailjs
        .send(
          "service_6wb1ojn",
          "template_rvvppa9",
          emailParams,
          "uwYpYFAtDFBm8Tr39",
        )
        .then(
          function (response) {
            setOpen(!open);
            resetForm();
            setIsLoading(false);
          },
          function (error) {
            console.log("FAILED...", error);
          },
        );
    } else {
      openError(validate.message, validate.ref, 3000);
    } */
  };

  return (
    <Box w="94%" mx="auto" py="40px" px="30px">
      <Box mb="45px">
        <Heading
          fontSize={{ base: "xxl", md: "xxxl" }}
          lineHeight="normal"
          color="argila"
        >
          Inscripció als Matossers de Molins de Rei
        </Heading>
      </Box>
      <form action="javascript:void(0);">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={{ base: "20px", xl: "50px" }}
          gap="20px"
        >
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Gènere *
            </Text>
            <RadioGroup.Root
              value={genere}
              onValueChange={(e) => setGenere(e.value)}
            >
              <HStack gap="6">
                {genereList.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator
                      border="1px solid"
                      borderColor="argila"
                      _checked={{ backgroundColor: "argila" }}
                    />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>
          </Box>
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Data de naixement *
            </Text>
            <Box maxW="220px">
              <SingleDatepicker
                name="date-input"
                date={dataNaixement}
                onDateChange={setDataNaixement}
                triggerVariant="input"
                configs={{
                  firstDayOfWeek: 1,
                  locale: ca,
                  dateFormat: "dd/MM/yyyy",
                  dayNames: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                  monthNames: monthNames,
                }}
                propsConfigs={{
                  triggerIconBtnProps: {
                    background: "transparent",
                    color: "argila",
                  },
                  dayOfMonthBtnProps: {
                    defaultBtnProps: {
                      background: "transparent",
                      color: "argila",
                      _hover: {
                        background: "argila",
                        color: "white",
                      },
                    },
                    selectedBtnProps: {
                      background: "argila",
                      color: "white",
                    },
                  },
                  dateNavBtnProps: {
                    background: "transparent",
                    color: "argila",
                    _hover: {
                      background: "argila",
                      color: "white",
                    },
                  },
                  popoverCompProps: {
                    popoverContentProps: {
                      borderColor: "argila",
                      border: "1px solid",
                      color: "argila",
                      boxShadow: "var(--chakra-shadows-base)",
                    },
                  },
                  calendarPanelProps: {
                    wrapperProps: {
                      borderColor: "argila",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              DNI / NIE *
            </Text>
            <Input
              w="90%"
              fontSize="normal"
              color="negre"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setDni(e.target.value)}
              value={dni}
            />
          </Box>
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          mb={{ base: "20px", xl: "50px" }}
          gap="20px"
        >
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Nom *
            </Text>
            <Input
              w="90%"
              fontSize="normal"
              color="negre"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </Box>
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Cognoms *
            </Text>
            <Input
              w="90%"
              fontSize="normal"
              color="negre"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setCognom(e.target.value)}
              value={cognom}
            />
          </Box>
          {majorEdat === true ? (
            <Box w="100%">
              <Text fontWeight={600} mb="10px" color="argila">
                Malnom
              </Text>
              <Input
                w="90%"
                fontSize="normal"
                color="negre"
                border="0"
                borderBottom="1px solid"
                borderBottomColor="argila"
                _focus={{ boxShadow: "none" }}
                onChange={(e) => setMalnom(e.target.value)}
                value={malnom}
              />
            </Box>
          ) : (
            <Box w="100%">
              <Text fontWeight={600} mb="10px" color="argila">
                Nom del pare/mare/tutor legal *
              </Text>
              <Input
                w="90%"
                fontSize="normal"
                color="negre"
                border="0"
                borderBottom="1px solid"
                borderBottomColor="argila"
                _focus={{ boxShadow: "none" }}
                onChange={(e) => setTutor(e.target.value)}
                value={tutor}
              />
            </Box>
          )}
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap="20px"
          mb={{ base: "20px", xl: "50px" }}
        >
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Correu electrònic *
            </Text>
            <Input
              w="90%"
              type="email"
              color="negre"
              fontSize="normal"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Box>
          <Box w="100%">
            <Text fontWeight={600} mb="10px" color="argila">
              Telèfon *
            </Text>
            <Input
              w="90%"
              color="negre"
              fontSize="normal"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Box>
        </Flex>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap="20px"
          mb={{ base: "20px", xl: "50px" }}
        >
          <Box w={{ base: "100%", md: "50%" }} mr={{ base: "0", xl: "2%" }}>
            <Text fontWeight={600} mb="10px" color="argila">
              Adreça *
            </Text>
            <Input
              w="90%"
              color="negre"
              fontSize="normal"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setAdreca(e.target.value)}
              value={adreca}
            />
          </Box>
          <Box w={{ base: "100%", md: "30%" }} mr={{ base: "0", xl: "2%" }}>
            <Text fontWeight={600} mb="10px" color="argila">
              Població *
            </Text>
            <Input
              w="90%"
              color="negre"
              fontSize="normal"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setPoblacio(e.target.value)}
              value={poblacio}
            />
          </Box>
          <Box w={{ base: "100%", md: "20%" }} mr={{ base: "0", xl: "2%" }}>
            <Text fontWeight={600} mb="10px" color="argila">
              Codi postal *
            </Text>
            <Input
              w="90%"
              color="negre"
              fontSize="normal"
              border="0"
              borderBottom="1px solid"
              borderBottomColor="argila"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setCp(e.target.value)}
              value={cp}
            />
          </Box>
        </Flex>
        <Heading
          fontSize={{ base: "xl", md: "xxl" }}
          lineHeight="normal"
          color="argila"
          textTransform="uppercase"
        >
          Altres dades d&apos;interès
        </Heading>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap="20px"
          my={{ base: "20px", xl: "50px" }}
        >
          {majorEdat === true ? (
            <Box w="100%">
              <Text fontWeight={600} mb="10px" color="argila">
                Professió
              </Text>
              <Input
                w="90%"
                color="negre"
                fontSize="normal"
                border="0"
                borderBottom="1px solid"
                borderBottomColor="argila"
                _focus={{ boxShadow: "none" }}
                onChange={(e) => setProfessio(e.target.value)}
                value={professio}
              />
            </Box>
          ) : (
            <Box w="100%">
              <Text fontWeight={600} mb="10px" color="argila">
                Centre educatiu
              </Text>
              <Input
                w="90%"
                color="negre"
                fontSize="normal"
                border="0"
                borderBottom="1px solid"
                borderBottomColor="argila"
                _focus={{ boxShadow: "none" }}
                onChange={(e) => setCentreEducatiu(e.target.value)}
                value={centreEducatiu}
              />
            </Box>
          )}
          <Box w="100%" mr={{ base: "0", xl: "2%" }} mb={"50px"}>
            <Text fontWeight={600} mb="10px" color="argila">
              Altres informacions que ens puguin ser útils (al·lèrgies,
              malalties, habilitats...)
            </Text>
            <Textarea
              w="95%"
              h="150px"
              fontSize="normal"
              border="1px solid"
              borderColor="argila"
              color="negre"
              _focus={{ boxShadow: "none" }}
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
          </Box>
        </Flex>
        <Box w="100%" mb={"50px"}>
          <Checkbox.Root
            onCheckedChange={() => setGdpr(!gdpr)}
            style={{ marginTop: "25px", marginBottom: "10px" }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control
              border="1px solid"
              borderColor="argila"
              _checked={{ backgroundColor: "argila" }}
            />
            <Checkbox.Label color="negre">
              {" "}
              Accepto les condicions d&apos;ús i la política de privacitat.{" "}
              <strong>Responsable:</strong> Colla Castellera Matossers de Molins
              de Rei; <strong>Finalitat:</strong> Gestionar les inscripcions de
              castellers i les assegurances; <strong>Drets:</strong> Accés,
              rectificació, supressió, oposició, limitació i portabilitat. Per a
              més informació consulta la{" "}
              <Link
                href="/politica-privacitat"
                color="argila"
                textDecoration="underline"
              >
                política de privacitat
              </Link>
            </Checkbox.Label>
          </Checkbox.Root>

          {error.isError && (
            <Text fontWeight={700} my="30px" color="red">
              {error.msgError}
            </Text>
          )}
        </Box>
        <Button
          variant="primary"
          size="normal"
          onClick={submit}
          disabled={isLoading}
        >
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
export default FormAlta;
