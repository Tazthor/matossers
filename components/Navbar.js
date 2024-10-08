import React, { useState } from "react";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import NaviconStyles from "../styles/navicon.module.css";
import { useRouter } from "next/router";
import { XXSS } from "./xxss";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { logoOut } from "../utils/login";
import { IoChatbubblesOutline } from "react-icons/io5";

export const Navbar = function (props) {
  const [state, setState] = useState(false);
  const router = useRouter();

  const tancaSessio = async function () {
    const logOut = await logoOut();
    if (logOut == "signOut") {
      props.setRole("default");
      router.push("/");
    }
  };

  const optionsMenu = () => {
    return (
      <>
        <Box
          mx={{ base: "0", md: "10px" }}
          my={{ base: "15px", md: "0" }}
          className={props.page != "quisom" ? "menu-item" : "menu-item-active"}
        >
          {props.page != "quisom" ? (
            <Link href="/quisom">Qui som</Link>
          ) : (
            <Text className={"menu-item-active"}>Qui som</Text>
          )}
        </Box>
        <Box
          mx={{ base: "0", md: "10px" }}
          my={{ base: "15px", md: "0" }}
          className={
            props.page != "calendari" ? "menu-item" : "menu-item-active"
          }
        >
          {props.page != "calendari" ? (
            <Link href="/calendari">Calendari</Link>
          ) : (
            <Text className={"menu-item-active"}>Calendari</Text>
          )}
        </Box>
        <Box
          mx={{ base: "0", md: "10px" }}
          my={{ base: "15px", md: "0" }}
          className={props.page != "assajos" ? "menu-item" : "menu-item-active"}
        >
          {props.page != "assajos" ? (
            <Link href="/assajos">Assajos</Link>
          ) : (
            <Text className={"menu-item-active"}>Assajos</Text>
          )}
        </Box>
        <Box
          mx={{ base: "0", md: "10px" }}
          my={{ base: "15px", md: "0" }}
          className={props.page != "musics" ? "menu-item" : "menu-item-active"}
        >
          {props.page != "musics" ? (
            <Link href="/musics">Músics</Link>
          ) : (
            <Text className={"menu-item-active"}>Músics</Text>
          )}
        </Box>
        <Box
          mx={{ base: "0", md: "10px" }}
          my={{ base: "15px", md: "0" }}
          className={props.page != "socis" ? "menu-item" : "menu-item-active"}
        >
          {props.page != "socis" ? (
            <Link href="/fes-te-soci">Fes-te'n soci</Link>
          ) : (
            <Text className={"menu-item-active"}>Fes-te'n soci</Text>
          )}
        </Box>
        <Box
          mx={{ base: "0", md: "15px" }}
          my={{ base: "15px", md: "0" }}
          className={
            props.page != "contacte" ? "menu-item" : "menu-item-active"
          }
        >
          {props.page != "contacte" ? (
            <Link href="/#contacte">Contacte</Link>
          ) : (
            <Text className={"menu-item-active"}>Contacte</Text>
          )}
        </Box>
        {(props.role == "casteller" ||
          props.role == "admin" ||
          props.role == "junta") && (
          <>
            <Box
              mx={{ base: "0", md: "15px" }}
              my={{ base: "15px", md: "0" }}
              className={"menu-item"}
            >
              <Link href="/recursos">Recursos</Link>
            </Box>
          </>
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
          </Flex>
        </Box>
        <Box
          w="65%"
          alignSelf="center"
          mr="5%"
          display={{ base: "none", xl: "block" }}
        >
          <Box>
            <Flex justifyContent="flex-end" mb="10px" alignItems="center">
   {/*            {props.role != "default" ? (
                <Flex>
                  <Flex
                    color="argila"
                    p="2px 10px"
                    mr="10px"
                    alignItems="center"
                  >
                    <Box mr="6px">
                      <AiOutlineEye size="25px" />
                    </Box>{" "}
                    <Text fontSize={"md"}>{props.role}</Text>
                  </Flex>
                  <Button
                    border="1px solid"
                    borderColor="argila"
                    borderRadius="6px"
                    bg="transparent"
                    color="argila"
                    h="27px"
                    fontWeight={400}
                    onClick={() => tancaSessio()}
                  >
                    Surt de la sessió
                  </Button>
                  {props.role == "admin" && (
                    <Button
                      border="1px solid"
                      borderColor="argila"
                      borderRadius="6px"
                      bg="transparent"
                      color="argila"
                      h="27px"
                      fontWeight={400}
                      mx="20px"
                      onClick={() =>
                        window.open("https://dev.cms.matossers.cat/", "_blank")
                      }
                    >
                      Gestor de continguts
                    </Button>
                  )}
                </Flex>
              ) : (
                <Box
                  mr="20px"
                  onClick={() => router.push("/login")}
                  cursor="pointer"
                  color="#808080"
                  _hover={{ color: "argila" }}
                >
                  <FaRegUserCircle size="25px" />
                </Box>
              )} */}
              <Box>
                <XXSS fb tw yt ig />
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent="flex-end" fontSize="medium" mt="20px">
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
        <Flex justifyContent="center" mb="10px" alignItems="center">
          {props.role != "default" ? (
            <Box mb="10px" display={{ base: "block", md: "flex" }}>
              <Flex
                color="argila"
                p="2px 10px"
                mr="10px"
                alignItems="center"
                justifyContent={"center"}
              >
                <Box mr="6px">
                  <AiOutlineEye size="25px" />
                </Box>{" "}
                <Text fontSize={"md"}>{props.role}</Text>
              </Flex>
              <Box my="10px">
                <Button
                  border="1px solid"
                  borderColor="argila"
                  borderRadius="6px"
                  bg="transparent"
                  color="argila"
                  h="27px"
                  mr={{ base: "0", md: "10px" }}
                  fontWeight={400}
                  onClick={() => tancaSessio()}
                >
                  Surt de la sessió
                </Button>
              </Box>
              {props.role == "admin" && (
                <Box my="10px">
                  <Button
                    border="1px solid"
                    borderColor="argila"
                    borderRadius="6px"
                    bg="transparent"
                    color="argila"
                    h="27px"
                    fontWeight={400}
                    onClick={() =>
                      window.open("https://dev.cms.matossers.cat/", "_blank")
                    }
                  >
                    Gestor de continguts
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            <Box
              onClick={() => router.push("/login")}
              cursor="pointer"
              color="#808080"
              _hover={{ color: "argila" }}
            >
              <FaRegUserCircle size="25px" />
            </Box>
          )}
        </Flex>
        {optionsMenu()}
      </Box>
    </Box>
  );
};
export default Navbar;
