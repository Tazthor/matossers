import React from "react";
import { Text } from "@chakra-ui/react";

export const Title = function (props) {

    return (
        <Text fontWeight={700} color={(props.color) ? props.color : "argila"} textTransform="uppercase"
        fontSize={(props.header == "1") && "big" || (props.header == "2") && "xxl"}>
            {props.text}
        </Text>
)
}
export default Title