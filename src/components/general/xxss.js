import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";

export const XXSS = function () {
  return (
    <Flex gap="8px">
      <Link href="https://www.facebook.com/Matossers/" target="_blank">
        <Box color="#663b30" _hover={{ color: "#9e9e9e" }}>
          <BiLogoFacebookSquare size="26px" />
        </Box>
      </Link>
      <Link href="https://twitter.com/matossers" target="_blank">
        <Box color="#663b30" _hover={{ color: "#9e9e9e" }}>
          <FaXTwitter size="22px" />
        </Box>
      </Link>
      <Link href="https://www.instagram.com/matossers/" target="_blank">
        <Box color="#663b30" _hover={{ color: "#9e9e9e" }}>
          <RiInstagramFill size="22px" />
        </Box>
      </Link>
      <Link href="https://www.youtube.com/user/MatossersMolins" target="_blank">
        <Box color="#663b30" _hover={{ color: "#9e9e9e" }}>
          <RiYoutubeFill size="26px" />
        </Box>
      </Link>
    </Flex>
  );
};
