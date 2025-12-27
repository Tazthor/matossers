"use client";
import React, { useState } from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import NaviconStyles from "@/styles/navicon.module.css";
import { useRouter } from "next/navigation";
import { XXSS } from "./xxss";
import Link from "next/link";

export const Navbar = function (props) {
  const [state, setState] = useState(false);
  const router = useRouter();

  const menu = [
    { name: "Qui som", link: "/quisom", key: "quisom" },
    { name: "Calendari", link: "/calendari", key: "calendari" },
    { name: "Assajos", link: "/assajos", key: "assajos" },
    { name: "Músics", link: "/musics", key: "musics" },
    { name: "Fes-te'n soci", link: "/fes-te-soci", key: "socis" },
    { name: "Contacte", link: "/#contacte", key: "contacte" },
  ];

  return (
    <Box
      w="100%"
      position="fixed"
      bg="#fff"
      h={{ base: "140px", xl: "120px" }}
      zIndex="500"
      pt="20px"
    >
      <Flex w="90%" maxW="2500px" m="auto" justifyContent="space-between">
        <Box
          w={{ base: "70%", xl: "40%" }}
          mt="10px"
          onClick={() => router.push("/")}
          cursor="pointer"
        >
            <Box w={{ base: "200px", xl: "40%" }} mb="20px">
              <Image src="/images/logos/logo.png" alt="Matossers" maxH="70px" />
            </Box>
        </Box>
        <Box
          w="60%"
          alignSelf="center"
          display={{ base: "none", xl: "block" }}
        >
          <Flex justifyContent="flex-end" mr="10px" alignItems="center">
            <XXSS />
          </Flex>
          <Flex justifyContent="flex-end" fontSize="medium" mt="10px">
            {menu.map((item) => (
              <Box
                key={item.key}
                mx="10px"
                my="0"
                color={props.page != item.key ? "black" : "argila"}
                fontFamily="heading"
                _hover={{ color: "argila" }}
              >
                {props.page != item.key ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  <Text color="argila">{item.name}</Text>
                )}
              </Box>
            ))}
          </Flex>
        </Box>
        <Box
          w="20%"  
          display={{ base: "block", xl: "none" }}
            alignSelf="center"
            
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
        pb="20px"
        width="100%"
        fontSize="medium"
        lineHeight={{ base: "18px", md: "22px", xl: "26px" }}
        fontFamily="heading"
        backgroundColor="#fff"
        textAlign="center"
      >
        {menu.map((item) => (
          <Box
            key={item.key}
            my="15px"
            color={props.page != item.key ? "black" : "argila"}
          >
            {props.page != item.key ? (
              <Link href={item.link}>{item.name}</Link>
            ) : (
              <Text color="argila">{item.name}</Text>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Navbar;
