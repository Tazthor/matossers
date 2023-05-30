import React from "react";
import { Box } from "@chakra-ui/react";

export const Margin = function (props) {

    return (
        <Box w="100%"
        h={{base:props.mobile ? props.mobile : props.desktop ,
        md:props.tablet ? props.tablet : props.desktop,
        xl:props.desktop}}
        backgroundColor={props.bgcolor ? props.bgcolor : '#fff' }>
        </Box>
)
}
export default Margin