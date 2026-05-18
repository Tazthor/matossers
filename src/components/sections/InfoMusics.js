"use client";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export const InfoMusics = function ({ data }) {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Heading
        fontSize={{ base: "xl", md: "xxl" }}
        lineHeight="normal"
        color="argila"
        textTransform="uppercase"
      >
        Les nostres gralles i tabals
      </Heading>
      <Flex
        w="100%"
        justifyContent="center"
        display={{ base: "block", xl: "flex" }}
      >
        <Box
          w={{ base: "100%", xl: "48%" }}
          mr={{ base: "0", xl: "2%" }}
          mb={{ base: "30px", md: "0" }}
        >
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => <a className="" {...props} />,
              p: ({ node, ...props }) => (
                <p className="isParagraph" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="listnotnumber" {...props} />
              ),
            }}
          >
            {data.text}
          </ReactMarkdown>
        </Box>
        <Box
          w={{ base: "100%", xl: "48%" }}
          ml={{ base: "0", xl: "2%" }}
          my="30px"
        >
          <Image src={data.image} alt="Grallers i tabaleres" />
        </Box>
      </Flex>
    </Box>
  );
};
export default InfoMusics;
