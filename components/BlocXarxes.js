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
        display={["flex", "block", "block"]}
      >
        <Box
          w={["100%", "100%", "30%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "50px"]}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Matossers"
            options={{ height: 500 }}
          />
        </Box>
        <Box
          w={["100%", "100%", "30%"]}
          mr={["0", "0", "2%"]}
          mb={["20px", "20px", "0"]}
        >
        </Box>
      </Flex>
    </>
  );
};
export default BlocXarxes;
