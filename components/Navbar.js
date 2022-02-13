import React, { useState } from "react";
import { Box, Image, Flex, Link, Button, List, ListItem } from "@chakra-ui/react";
import NaviconStyles from '../styles/navicon.module.css'
import { useRouter } from 'next/router'


export const Navbar = function (props) {
    const [state, setState] = useState(false);
    const router = useRouter()

    return (
        <Box w="100%" position="fixed" bg="#fff" h={["90px", "120px", "120px"]} zIndex="500">
            <Flex w="100%" maxW="2500px" m="auto" >
                <Box w={["50%","30%","30%"]} mt="27px">
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
                                XXSS
                            </Box>
                        </Flex>
                    </Box>
                    <Flex justifyContent="flex-end">
                        <Box as={(props.page == 'inici') ? "span" : "a"} mx="10px"
                            className={(props.page == 'inici') ? "menu-item-active" : "menu-item"}
                            href="/"
                        >
                            MenuItem0
                        </Box>
                        <Box as={(props.page == 'llibre') ? "span" : "a"} mx="10px"
                            className={(props.page == 'llibre') ? "menu-item-active" : "menu-item"}
                            href="/llibre"
                        >
                            MenuItem1
                        </Box>
                        <Box as={(props.page == 'autor') ? "span" : "a"} mx="10px"
                            className={(props.page == 'autor') ? "menu-item-active" : "menu-item"}
                            href="/autor"
                        >
                            MenuItem2
                        </Box>
                        <Box as={(props.page == 'presentacions') ? "span" : "a"} mx="10px"
                            className={(props.page == 'presentacions') ? "menu-item-active" : "menu-item"}
                            href="/aprenentatges/#bannerPresentacions"
                        >
                            MenuItem3
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
