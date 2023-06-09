import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Box, Text, Flex } from "@chakra-ui/react";
import Title from "./Title";
import InstagramPanel from "./InstagramPanel";

export const BlocXarxes = function ({insfeeds}) {
  return (
    <>
      <Box mb="45px">
        <Title header="1" text="Els nostres tuits"></Title>
      </Box>
      <Flex
        w={{base:"90%", md:"80%", xl:"75%"}}
        maxW="2500px"
        m="auto"
        position="relative"
        display={{base:"block", xl:"flex"}}
      >
        <Box
          w={{base:"100%", xl:"50%"}}
          mx="auto"
          mb={{base:"20px", xl:"50px"}}
          boxShadow="0px 0px 6px rgba(0, 0, 0, 0.3)"
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Matossers"
            tweetLimit="1"
          />
        </Box>
{/*          <Box
          w={{base:"100%", xl:"30%"}}
          mr={{base:"0", xl:"2%"}}
          mb={{base:"20px", xl:"0"}}
        >
          <InstagramPanel insfeeds={insfeeds}/>
        </Box>
 */}       </Flex>
    </>
  );
};
export default BlocXarxes;
