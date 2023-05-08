import React, { useState } from "react";
import { Box, Image, Flex, Text, List, ListItem } from "@chakra-ui/react";
import NaviconStyles from "../styles/navicon.module.css";
import { useRouter } from "next/router";
import { XXSS } from "./xxss";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa"

export const Navbar = function (props) {
  const [state, setState] = useState(false);
  const router = useRouter();

  const optionsMenu = () => {
    return (
      <>
        {props.page != "quisom" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/quisom">
            Qui som
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
            Qui som
            </Text>
          </Box>
        )}
        {props.page != "calendari" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/calendari">
              Calendari
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
              Calendari
            </Text>
          </Box>
        )}
        {props.page != "assajos" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/assajos">
              Assajos
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
              Assajos
            </Text>
          </Box>
        )}
        {props.page != "musics" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/musics">
              Músics
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
              Músics
            </Text>
          </Box>
        )}
        {props.page != "socis" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/fes-te-soci">
              Fes-te'n soci
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
              Fes-te'n soci
            </Text>
          </Box>
        )}
        {props.page != "contacte" ? (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Link mx="10px" className={"menu-item-active"} href="/#contacte">
              Contacte
            </Link>
          </Box>
        ) : (
          <Box mx={{base:"0", md:"5px"}} my={{base:"15px", md:"0"}}>
            <Text mx="10px" className={"menu-item"}>
              Contacte
            </Text>
          </Box>
        )}
      </>
    );
  };

  return (
    <Box
      w="100%"
      position="fixed"
      bg="#fff"
      h={{ base: "140px", xl: "130px" }}
      zIndex="500"
      pt="20px"
      borderBottom="1px solid"
      borderColor="argila"
    >
      <Flex w="90%" maxW="2500px" m="auto">
        <Box
          w={{ base: "70%", xl: "30%" }}
          mt="20px"
          onClick={() => router.push("/")}
          cursor="pointer"
        >
          <Flex w="100%" alignItems="center">
            <Box w={{ base: "200px", xl: "40%" }} mr="2%" mb="20px">
              <Image src="/images/logos/logo.png" alt="Matossers" maxH="70px" />
            </Box>
            <Box w={{ base: "100px", xl: "25%" }} ml="2%" mb="20px">
              <Image
                src="/images/logos/20_logo_vect.svg"
                alt="Matossers"
                maxH="70px"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          w="65%"
          alignSelf="center"
          mr="5%"
          display={{ base: "none", xl: "block" }}
        >
          <Box>
            <Flex justifyContent="flex-end" mb="10px">
                {
                    (props.role != "default") ?
                    <Box>{props.role}</Box>
                    : <Box mr="20px" onClick={() => router.push("/login")} cursor="pointer"><FaRegUserCircle size="25px"/></Box>
                }
              <Box>
                <XXSS fb tw yt ig />
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent="flex-end" fontSize="medium">
            {optionsMenu()}
          </Flex>
        </Box>
        <Box
          w="30%"
          mr="5%"
          display={{ base: "block", xl: "none" }}
          textAlign="right"
        >
          <div display="block" className={NaviconStyles.buttonsContainer}>
            <button
              className={
                state
                  ? `${NaviconStyles.linesButton} ${NaviconStyles.x2} ${NaviconStyles.open}`
                  : `${NaviconStyles.linesButton} ${NaviconStyles.x2}`
              }
              onClick={() => setState(!state)}
            >
              <span className={NaviconStyles.lines}></span>
            </button>
          </div>
        </Box>
      </Flex>
      <Box
        display={{
          base: state ? "block" : "none",
          md: state ? "block" : "none",
          xl: "none",
        }}
        py="30px"
        width="100%"
        fontSize="normal"
        lineHeight={{ base: "18px", md: "22px", xl: "26px" }}
        fontWeight="bold"
        backgroundColor="#fff"
        textAlign="center"
      >
        {optionsMenu()}
      </Box>
    </Box>
  );
};
export default Navbar;
