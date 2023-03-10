import React from "react";
import { Box } from "@chakra-ui/react";

export const Margin = function (props) {

    return (
        <Box w="100%"
        h={[props.mobile ? props.mobile : props.desktop ,
        props.tablet ? props.tablet : props.desktop,
        props.desktop]}
        backgroundColor={props.bgcolor ? props.bgcolor : '#fff' }>
        </Box>
)
}
export default Margin