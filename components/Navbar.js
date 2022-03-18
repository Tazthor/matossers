import React, { useState } from "react";
import { Box, Image, Flex, Link, Button, List, ListItem } from "@chakra-ui/react";
import NaviconStyles from '../styles/navicon.module.css'
import { useRouter } from 'next/router'
import { XXSS } from "./xxss";


export const Navbar = function (props) {
    const [state, setState] = useState(false);
    const router = useRouter()

    return (
        <Box w="100%" position="fixed" bg="#fff" h={["90px", "120px", "120px"]} zIndex="500">
            <Flex w="90%" maxW="2500px" m="auto" >
                <Box w={["50%","30%","30%"]} mt="27px" onClick={() => router.push("/")} cursor="pointer">
                    <Image w="170px" ml="35px"
                        src="/images/logo.png"
                        alt="Matossers" />
                </Box>
                <Box w="65%" alignSelf="self-end" mr="5%" display={["none", "block", "block"]}>
                    <Box>
                        <Flex justifyContent="flex-end" mb="10px">
                            <Box>
                                coses +
                            </Box>
                            <Box>
                                <XXSS
                                    fb={true}
                                    tw={true}
                                    yt={true}
                                    ig={true}
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Flex justifyContent="flex-end">
                        <Box as={(props.page == 'quisom') ? "span" : "a"} mx="10px"
                            className={(props.page == 'quisom') ? "menu-item-active" : "menu-item"}
                            href="/qui-som">
                            Qui som
                        </Box>
                        <Box as={(props.page == 'calendari') ? "span" : "a"} mx="10px"
                            className={(props.page == 'calendari') ? "menu-item-active" : "menu-item"}
                            href="/calendari">
                            Calendari
                        </Box>
                        <Box as={(props.page == 'assajos') ? "span" : "a"} mx="10px"
                            className={(props.page == 'assajos') ? "menu-item-active" : "menu-item"}
                            href="/assajos">
                            Assajos
                        </Box>
                        <Box as={(props.page == 'multimedia') ? "span" : "a"} mx="10px"
                            className={(props.page == 'multimedia') ? "menu-item-active" : "menu-item"}
                            href="multimedia">
                            Multimèdia
                        </Box>
                        <Box as={(props.page == 'musics') ? "span" : "a"} mx="10px"
                            className={(props.page == 'musics') ? "menu-item-active" : "menu-item"}
                            href="/musics">
                            Músics
                        </Box>
                        <Box as={(props.page == 'socis') ? "span" : "a"} mx="10px"
                            className={(props.page == 'socis') ? "menu-item-active" : "menu-item"}
                            href="/socis">
                            Socis
                        </Box>
                        <Box as={(props.page == 'contacte') ? "span" : "a"} mx="10px"
                            className={(props.page == 'contacte') ? "menu-item-active" : "menu-item"}
                            href="/contacte">
                            Contacte
                        </Box>
                    </Flex>
                </Box>
                <Box w="45%" mr="5%" display={["block", "none", "none"]} textAlign="right">
                    <div display="block" className={NaviconStyles.buttonsContainer}>
                        <button className={state ? `${NaviconStyles.linesButton} ${NaviconStyles.x2} ${NaviconStyles.open}` :
                            `${NaviconStyles.linesButton} ${NaviconStyles.x2}`}
                            onClick={() => setState(!state)}>
                            <span className={NaviconStyles.lines}></span>
                        </button>
                    </div>
                </Box>
            </Flex>
            <Box
                display={[(state) ? "block" : "none", "none", "none"]}
                width="100%"
                textAlign="left"
                fontSize="normal"
                lineHeight={["18px", "22px", "26px"]}
                fontWeight="bold"
                backgroundColor="#fff"
            >
                <List textAlign="center" py="15px">
                    <ListItem my="15px">
                        <Box as={(props.page == 'inici') ? "span" : "a"} mx="10px"
                            className={(props.page == 'inici') ? "menu-item-active" : "menu-item"}
                            href="/"
                        >
                            MenuItem0
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'llibre') ? "span" : "a"} mx="10px"
                            className={(props.page == 'llibre') ? "menu-item-active" : "menu-item"}
                            href="/llibre"
                        >
                            MenuItem1
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'autor') ? "span" : "a"} mx="10px"
                            className={(props.page == 'autor') ? "menu-item-active" : "menu-item"}
                            href="/autor"
                        >
                            MenuItem2
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'compra') ? "span" : "a"} mx="10px"
                            className={(props.page == 'compra') ? "menu-item-active" : "menu-item"}
                            href="/compra"
                        >
                            MenuItem4
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};
export default Navbar
