import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import Title from "./Title";
import { useState } from "react";

export const FormContacte = function (props) {
  const [nom, setNom] = useState();
  const [cognom, setCognom] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();

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
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc" : "argila"}>Nom</Text>
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
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc" : "argila"}>Cognoms</Text>
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
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc" : "argila"}>Correu electrònic</Text>
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
          <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc" : "argila"}>Telèfon de contacte</Text>
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
        <Text fontWeight={600} mb="10px" color={(props.negatiu) ? "groc" : "argila"}>Missatge</Text>
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
      </Box>
      <Button
        w="200px" fontSize="normal" py="20px"
        border="1px solid" borderColor={(props.negatiu) ? 'blanc' : "argila"} borderRadius="6px" 
        bg={(props.negatiu) ? "blanc" : "argila"} color={(props.negatiu) ? "negre" : "blanc"}
        _hover={{ bg: "white", color: "argila" }} _focus={{ boxShadow: "none" }} >
        Envia
      </Button>

    </Box>
  );
};
export default FormContacte;
