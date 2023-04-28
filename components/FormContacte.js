import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Box, Button, Flex, Input, Text, Textarea, Checkbox } from "@chakra-ui/react";
import Title from "./Title";
import Link from 'next/link'
import { useState } from "react";

export const FormContacte = function (props) {
  const [nom, setNom] = useState('');
  const [cognom, setCognom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [gdpr, setGdpr] = useState(false);
  const [error, setError] = useState({ isError: false, msgError: '' })

  const openError = function (msg, milisegons) {
    if (!milisegons) milisegons = 5000
    setError({ isError: true, msgError: msg })
    setTimeout(closeError, milisegons)
  }

  const closeError = function () {
    setError({ isError: false, msgError: '' })
  }

  const validateForm = async function () {
    var errors = []
    if (nom == '') {
      errors.push({
        error: true,
        message: 'El camp Nom és obligatori',
      })
    }
    if (cognom == '') {
      errors.push({
        error: true,
        message: 'El camp Cognom és obligatori',
      })
    }
    if (email == '') {
      errors.push({
        error: true,
        message: 'El correu electrònic és obligatori',
      })
    }
    if (msg == '') {
      errors.push({
        error: true,
        message: 'No has escrit cap missatge',
      })
    }
    if (errors.length == 0) {
         if (!gdpr) {
          return { error: true, message: 'Has d\'acceptar la política de privacitat' }
        }
       return { error: false }
    }
    else if (errors.length == 1) return errors[0]
    else
      return {
        error: true,
        message: "Hi ha camps obligatoris buits al formulari",
      }

  }

  const submit = async function () {
    var validate = await validateForm()
    if (!validate.error) {
      //Envia email
    }
    else {
      openError(validate.message, validate.ref, 3000)
    }

  }

  return (
    <Box w="100%" backgroundColor={(props.negatiu) ? "argila" : '#fff'} borderRadius="21px"
      py="40px" px="30px">
      <Box mb="45px">
        <Title header="2" text="Contacta'ns" color={(props.negatiu) ? "blanc" : ["#fff", "#fff", "argila"]}></Title>
      </Box>
      <Flex display={["block", "block", "flex"]}>
        <Box
          w={["100%", "100%", "48%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
        >
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc.mat" : "argila"}>Nom</Text>
          <Input
            w="90%"
            fontSize="normal"
            color={(props.negatiu) ? "blanc" : "negre"}
            border="0"
            borderRadius="0"
            borderBottom="1px solid"
            borderBottomColor={(props.negatiu) ? "blanc" : "argila"}
            _focus={{ boxShadow: "none" }}
            onChange={setNom}
          />
        </Box>
        <Box
          w={["100%", "100%", "48%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
        >
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc.mat" : "argila"}>Cognoms</Text>
          <Input
            w="90%"
            fontSize="normal"
            color={(props.negatiu) ? "blanc" : "negre"}
            border="0"
            borderRadius="0"
            borderBottom="1px solid"
            borderBottomColor={(props.negatiu) ? "blanc" : "argila"}
            _focus={{ boxShadow: "none" }}
            onChange={setCognom}
          />
        </Box>
      </Flex>
      <Flex display={["block", "block", "flex"]}>
        <Box
          w={["100%", "100%", "48%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
        >
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc.mat" : "argila"}>Correu electrònic</Text>
          <Input
            w="90%"
            color={(props.negatiu) ? "blanc" : "negre"}
            fontSize="normal"
            border="0"
            borderRadius="0"
            borderBottom="1px solid"
            borderBottomColor={(props.negatiu) ? "blanc" : "argila"}
            _focus={{ boxShadow: "none" }}
            onChange={setEmail}
          />
        </Box>
        <Box
          w={["100%", "100%", "48%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
        >
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc.mat" : "argila"}>Telèfon de contacte</Text>
          <Input
            w="90%"
            color={(props.negatiu) ? "blanc" : "negre"}
            fontSize="normal"
            border="0"
            borderRadius="0"
            borderBottom="1px solid"
            borderBottomColor={(props.negatiu) ? "blanc" : "argila"}
            _focus={{ boxShadow: "none" }}
            onChange={setPhone}
          />
        </Box>
      </Flex>
      <Box
        w="100%"
        mr={["0", "0", "2%"]}
        mb={"50px"}
      >
        <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc.mat" : "argila"}>Missatge</Text>
        <Textarea
          w="95%"
          fontSize="normal"
          border="0"
          borderRadius="0"
          borderBottom="1px solid"
          borderBottomColor={(props.negatiu) ? "blanc" : "argila"}
          color={(props.negatiu) ? "blanc" : "negre"}
          _focus={{ boxShadow: "none" }}
          onChange={setMsg}
        />
        <Checkbox
          colorScheme="red"
          isChecked={gdpr}
          onChange={() => setGdpr(!gdpr)}
          m="25px 0 10px 0" borderColor={(props.negatiu) ? "blanc" : "argila"}
          color={(props.negatiu) ? "blanc" : "negre"}>
          Accepto la {' '}
          <Link href="/politica-privacitat"><a style={{textDecoration:'underline', color:'#663b30'}}>política de privacitat</a></Link>
        </Checkbox>

        {(error.isError) && <Text fontWeight={700} my="30px" color={(props.negatiu) ? "blanc" : "red"}>{error.msgError}</Text>}
      </Box>
      <Button
        w="200px" fontSize="normal" py="20px"
        border="1px solid" borderColor={(props.negatiu) ? 'blanc' : "argila"} borderRadius="6px"
        bg={(props.negatiu) ? "blanc" : "argila"} color={(props.negatiu) ? "negre" : "blanc"}
        _hover={{ bg: "white", color: "argila" }} _focus={{ boxShadow: "none" }}
        onClick={submit}>
        Envia
      </Button>

    </Box>
  );
};
export default FormContacte;
