import React from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { XXSS } from "./xxss";
import { MdOutlinePlace } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

export const Footer = function (props) {
  const router = useRouter();
  return (
    <Box w="100%" maxW="2500px" m="auto" bg="argila" color="#fff" py="50px">
      <Flex w="90%" m="auto" display={{base:"block", lg:"flex"}}>
        <Box w={{base:"100%", lg:"30%"}} mr={{base:"0", xl:"2%"}}>
              <Image maxW="250px" src="/images/logos/logo_blanc.png" alt="Matossers" />
        </Box>
        <Box
          w={{base:"100%", lg:"40%"}}
          mx={{base:"0", xl:"3%"}}
          mt={{base:"30px", xl:"0"}}
        >
          <Box mb="15px">
            <Text fontSize="lg" fontWeight={600}>
              Assajos
            </Text>
            <Flex mt="10px">
              <Box mr="5px">
                <MdOutlinePlace size="1.5em" />
              </Box>
              <Text>Carrer Jacint Verdaguer, 48. Federació Obrera</Text>
            </Flex>
            <Flex mt="10px">
              <Box mr="5px">
                <BiTime size="1.5em" />
              </Box>
              <Text lineHeight="20px">
                Dimecres de 20 h a 22:30 h <br />
                Divendres de 20 h a 23 h
              </Text>
            </Flex>
          </Box>
          <Box w="90%" borderBottom="1px solid white" />
          <Box mt="15px">
            <Button
              mr="5px"
              border="1px solid #fff"
              borderRadius="6px"
              bg="transparent"
              color="white"
              _hover={{ bg: "white", color: "argila" }}
              _focus={{ boxShadow: "none" }}
              onClick={() => router.push("/#contacte")}
            >
              Contacta'ns
            </Button>
            <Button
              ml="5px"
              border="1px solid #fff"
              borderRadius="6px"
              bg="transparent"
              color="white"
              _hover={{ bg: "white", color: "argila" }}
              _focus={{ boxShadow: "none" }}
              onClick={() => router.push("/fes-te-soci")}
            >
              Fes-te'n soci
            </Button>
          </Box>
        </Box>
        <Box
          w={{base:"100%", lg:"30%"}}
          ml={{base:"0", xl:"2%"}}
          mt={{base:"30px", xl:"0"}}
        >
          <Box mb="15px">
            <Text fontSize="lg" fontWeight={600}>
              Segueix-nos
            </Text>
            <Box mt="10px">
              <XXSS fb tw yt ig />
            </Box>
          </Box>
          <Box w="90%" borderBottom="1px solid white" />
          <Box mt="15px">
            <Text fontSize="lg" fontWeight={600}>
              Col·laboren
            </Text>
            <Flex w="100%" alignItems="center">
              <Box w="30%" mr="3%" mb="20px">
                <Image
                  src="/images/patrocinadors/ajuntament.png"
                  alt="Ajuntament de Molins de Rei"
                />
              </Box>
              <Box w="16%" mx="3%" mb="20px">
                <Image
                  src="/images/patrocinadors/estrella.jpg"
                  alt="Ajuntament de Molins de Rei"
                />
              </Box>
           </Flex>
          </Box>
        </Box>
      </Flex>
      <Box my="20px" w="40%" borderBottom="1px solid white"  mx="auto"/>
      <Box textAlign="center" fontSize="sm">
        Copyright © 2022 Matossers de Molins de Rei. Tots els drets reservats. |{" "}
        <Link href="/politica-privacitat">
          <a style={{ textDecoration: "underline" }}>Política de privacitat</a>
        </Link>{" "}
        |{" "}
        <Link href="/politica-cookies">
          <a style={{ textDecoration: "underline" }}>Política de cookies</a>
        </Link>
      </Box>
    </Box>
  );
};
export default Footer;
