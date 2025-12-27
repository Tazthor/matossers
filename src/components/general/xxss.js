import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";

export const XXSS = function ({type}) {
  return (
    <Flex gap="8px">
      <Link href="https://www.facebook.com/Matossers/" target="_blank">
        <Box color={type === "white" ? "#fff" : "#818181"} _hover={{ color: "#818181" }}>
          <BiLogoFacebookSquare size="26px" />
        </Box>
      </Link>
      <Link href="https://twitter.com/matossers" target="_blank">
        <Box color={type === "white" ? "#fff" : "#818181"} _hover={{ color: "#818181" }}>
          <FaXTwitter size="22px" />
        </Box>
      </Link>
      <Link href="https://www.instagram.com/matossers/" target="_blank">
        <Box color={type === "white" ? "#fff" : "#818181"} _hover={{ color: "#818181" }}>
          <RiInstagramFill size="22px" />
        </Box>
      </Link>
      <Link href="https://www.youtube.com/user/MatossersMolins" target="_blank">
        <Box color={type === "white" ? "#fff" : "#818181"} _hover={{ color: "#818181" }}>
          <RiYoutubeFill size="26px" />
        </Box>
      </Link>
    </Flex>
  );
};
