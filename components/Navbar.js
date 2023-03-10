import React, { useState } from "react";
import { Box, Image, Flex, Button, List, ListItem } from "@chakra-ui/react";
import NaviconStyles from '../styles/navicon.module.css'
import { useRouter } from 'next/router'
import { XXSS } from "./xxss";


export const Navbar = function (props) {
    const [state, setState] = useState(false);
    const router = useRouter()

    return (
        <Box w="100%" position="fixed" bg="#fff" h={["120px", "130px", "130px"]} zIndex="500" pt="20px" borderBottom="1px solid" borderColor="argila">
            <Flex w="90%" maxW="2500px" m="auto" >
                <Box w={["70%", "70%", "30%"]} mt="20px" onClick={() => router.push("/")} cursor="pointer">
                    <Flex w="100%" alignItems="center">
                        <Box w={["200px", "40%", "40%"]} mr="2%" mb="20px">
                            <Image src="/images/logos/logo.png" alt="Matossers" maxH="70px" />
                        </Box>
                        <Box w={["100px", "25%", "25%"]} ml="2%" mb="20px">
                            <Image src="/images/logos/20_logo_vect.svg" alt="Matossers" maxH="70px" />
                        </Box>
                    </Flex>
                </Box>
                <Box w="65%" alignSelf="center" mr="5%" display={["none", "none", "block"]}>
                    <Box>
                        <Flex justifyContent="flex-end" mb="10px">
                            <Box>
                                <XXSS fb tw yt ig />
                            </Box>
                        </Flex>
                    </Box>
                    <Flex justifyContent="flex-end" fontSize="medium">
                        <Box as={(props.page == 'quisom') ? "span" : "a"} mx="10px"
                            className={(props.page == 'quisom') ? "menu-item-active" : "menu-item"}
                            href="/quisom">
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
{/*                         <Box as={(props.page == 'multimedia') ? "span" : "a"} mx="10px"
                            className={(props.page == 'multimedia') ? "menu-item-active" : "menu-item"}
                            href="multimedia">
                            Multimèdia
                        </Box>
 */}                        <Box as={(props.page == 'musics') ? "span" : "a"} mx="10px"
                            className={(props.page == 'musics') ? "menu-item-active" : "menu-item"}
                            href="/musics">
                            Músics
                        </Box>
                        <Box as={(props.page == 'socis') ? "span" : "a"} mx="10px"
                            className={(props.page == 'socis') ? "menu-item-active" : "menu-item"}
                            href="/fes-te-soci">
                            Fes-te'n soci
                        </Box>
                        <Box as={(props.page == 'contacte') ? "span" : "a"} mx="10px"
                            className={(props.page == 'contacte') ? "menu-item-active" : "menu-item"}
                            href="/contacte">
                            Contacte
                        </Box>
                    </Flex>
                </Box>
                <Box w="30%" mr="5%" display={["block", "block", "none"]} textAlign="right">
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
                display={[(state) ? "block" : "none", (state) ? "block" : "none", "none"]}
                width="100%"
                textAlign="left"
                fontSize="normal"
                lineHeight={["18px", "22px", "26px"]}
                fontWeight="bold"
                backgroundColor="#fff"
            >
                <List textAlign="center" py="15px">
                    <ListItem my="15px">
                        <Box as={(props.page == 'quisom') ? "span" : "a"} mx="10px"
                            className={(props.page == 'quisom') ? "menu-item-active" : "menu-item"}
                            href="/quisom">
                            Qui som
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'calendari') ? "span" : "a"} mx="10px"
                            className={(props.page == 'calendari') ? "menu-item-active" : "menu-item"}
                            href="/calendari">
                            Calendari
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'assajos') ? "span" : "a"} mx="10px"
                            className={(props.page == 'assajos') ? "menu-item-active" : "menu-item"}
                            href="/assajos">
                            Assajos
                        </Box>
                    </ListItem>
{/*                     <ListItem my="15px">
                        <Box as={(props.page == 'multimedia') ? "span" : "a"} mx="10px"
                            className={(props.page == 'multimedia') ? "menu-item-active" : "menu-item"}
                            href="multimedia">
                            Multimèdia
                        </Box>
                    </ListItem>
 */}                    <ListItem my="15px">
                        <Box as={(props.page == 'musics') ? "span" : "a"} mx="10px"
                            className={(props.page == 'musics') ? "menu-item-active" : "menu-item"}
                            href="/musics">
                            Músics
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'socis') ? "span" : "a"} mx="10px"
                            className={(props.page == 'socis') ? "menu-item-active" : "menu-item"}
                            href="/fes-te-soci">
                            Fes-te'n soci
                        </Box>
                    </ListItem>
                    <ListItem my="15px">
                        <Box as={(props.page == 'contacte') ? "span" : "a"} mx="10px"
                            className={(props.page == 'contacte') ? "menu-item-active" : "menu-item"}
                            href="/contacte">
                            Contacte
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};
export default Navbar
