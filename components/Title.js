import React from "react";
import { Text } from "@chakra-ui/react";

export const Title = function (props) {
  return (
    <Text
      fontWeight={700}
      color={props.color ? props.color : "argila"}
      textTransform={props.textTransform ? props.textTransform : "uppercase"}
      fontSize={{
        base:
          (props.header == "1" && "xxl") ||
          (props.header == "2" && "xl") ||
          (props.header == "3" && "lg"),
        xl:
          (props.header == "1" && "big") ||
          (props.header == "2" && "xxl") ||
          (props.header == "3" && "lg"),
      }}
      textAlign={props.textAlign ? props.textAlign : "left"}
    >
      {props.text}
    </Text>
  );
};
export default Title;
