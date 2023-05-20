import { Box, Text, Flex, Image, Spinner } from "@chakra-ui/react";

export const InstagramPanel = function ({insfeeds}) {
    
    return (
      <Box>
        <Image src={insfeeds.data[0].media_url} alt="darrer post" />
      </Box>
    );
};
export default InstagramPanel;

