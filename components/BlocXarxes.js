import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import Title from "./Title";
import InstagramPanel from "./InstagramPanel";

export const BlocXarxes = function ({insfeeds}) {
  return (
    <>
      <Box mb="45px">
        <Title header="1" text="Xarxes socials"></Title>
      </Box>
      <Flex
        w={{base:"90%", md:"80%", xl:"75%"}}
        maxW="2500px"
        m="auto"
        position="relative"
        display={{base:"block", xl:"flex"}}
        mb="40px"
      >
        <Box
          w={{base:"100%", xl:"40%"}}
          mb={{base:"20px", xl:"50px"}}
          boxShadow="0px 0px 6px rgba(0, 0, 0, 0.3)"
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Matossers"
            tweetLimit={5}
            options={
              {height: "500px"}
            }
          />
        </Box>
        <Spacer/>
        <Box
          w={{base:"100%", xl:"40%"}}
          mb={{base:"20px", xl:"0"}}
          boxShadow="0px 0px 6px rgba(0, 0, 0, 0.3)"
        >
          <InstagramPanel insfeeds={insfeeds}/>
        </Box>
       </Flex>
    </>
  );
};
export default BlocXarxes;
