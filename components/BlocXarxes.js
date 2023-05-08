import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Box, Text, Flex } from "@chakra-ui/react";
import Title from "./Title";

export const BlocXarxes = function (props) {
  return (
    <>
      <Box mb="45px">
        <Title header="1" text="Xarxes"></Title>
      </Box>
      <Flex
        w={["90%", "80%", "75%"]}
        maxW="2500px"
        m="auto"
        position="relative"
        display={["block", "block", "flex"]}
      >
        <Box
          w={["100%", "100%", "30%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
          boxShadow="0px 0px 6px rgba(0, 0, 0, 0.3)"
        >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Matossers"
              tweetLimit="1"
            />
        </Box>
        <Box
          w={["100%", "100%", "30%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "0"]}
        ></Box>
      </Flex>
    </>
  );
};
export default BlocXarxes;
