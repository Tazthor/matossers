import { Box, Text, Flex } from '@chakra-ui/react'
import FormContacte from './FormContacte'

export const BannerContacte = function (props) {
  return (
    <>
      <Box w="100%" maxW="2500px" m="auto" position="relative"
        backgroundImage={props.img}
        backgroundPosition="left"
        backgroundSize="cover"
        display={["none", "none", "block"]}>
        {
          (props.titleVisible) &&
          <Box w="100%" mx="auto" my="60px" textAlign="left">
            <Flex w="96%" ml="4%">
              <Box w="50%">TEXT</Box>
              <Box w="50%" mr="3%">
                <FormContacte/>
              </Box>
            </Flex>
          </Box>
        }
      </Box>
      <Box
      w="90%" m="auto"
      display={["block", "block", "none"]}
      >
                <FormContacte negatiu/>
      </Box>
    </>
  )
}
export default BannerContacte



