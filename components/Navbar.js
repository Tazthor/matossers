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
                <Box w="20%" mt="27px" display={["none", "block", "block"]}>
                    <Image w="157px" ml="35px"
                        src="/images/logos/logoblack.png"
                        alt="Òmnium Cultural" />
                </Box>
                <Box w="25%" mt="20px" display={["block", "none", "none"]}>
                    <Image w="37px" ml="37px"
                        src="/images/logos/ocn.png"
                        alt="Òmnium Cultural" />
                </Box>
                {
                    (props.page == 'soci' || props.page == 'socillibreria') ?
                        <></>
                        :
                        (props.page == "gracies") ?
                            <></>
                            :
                            (props.page == "gracies-llibreria") ?
                                <Box w={["75%", "80%", "80%"]} mt={["20px", "30px", "30px"]} mr={["20px", "50px", "50px"]} textAlign="right">
                                    <Box mx={["0", "16px", "16px"]} alignSelf="center">
                                        <Button className="button-orange" onClick={() => router.push("/feste-soci-llibreria")}>{t('common:TornarForm')}</Button>
                                    </Box>
                                </Box>
                                :
                                <Box w={["75%", "80%", "80%"]} mt={["0", "15px", "15px"]} mr={["0", "50px", "50px"]}>
                                    <Flex mt={["0", "26px", "26px"]} mb={["0", "26px", "26px"]} className="justifyNav">
                                        <Flex mr="35px" display={["none", "flex", "flex"]} alignSelf="center">
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

                                        <Box mt="-3px" display={["block", "none", "none"]} ml={["-20px", "0", "0"]}>
                                            <div display="block" className={NaviconStyles.buttonsContainer} >
                                                <button className={state ? `${NaviconStyles.linesButton} ${NaviconStyles.x2} ${NaviconStyles.open}` :
                                                    `${NaviconStyles.linesButton} ${NaviconStyles.x2}`}
                                                    onClick={() => setState(!state)}>
                                                    <span className={NaviconStyles.lines}></span>
                                                </button>
                                            </div>
                                        </Box>
                                    </Flex>
                                </Box>

                }
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
