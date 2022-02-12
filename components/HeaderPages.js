import { Image, Box, Text, Flex } from '@chakra-ui/react'

export const HeaderPages = function (props) {
  return (
    <>
      <Box w="100%" maxW="2500px" m="auto" position="relative" h="350px"
        backgroundImage={props.img}
        backgroundPosition="left"
        backgroundSize="cover"
        display={["none", "none", "block"]}>
        {
          (props.titleVisible) &&
          <Box w="100%" m="auto" left="0" right="0" position="absolute" textAlign="left" top={["25%", "10%", "13%"]}>
            <Flex w="96%" ml="4%">
              <Box w="50%"> </Box>
              <Box w="34%">
                <Text mb="5%" fontSize={["26px", "26px", "30px"]} fontWeight="bold" color="#000">
                Premi Sant Jordi 2021<br/> <br/> <em>Morir-ne disset</em><br/> Sergi Belbel
                </Text>
              </Box>
              <Box w="16%"> </Box>
            </Flex>
          </Box>
        }
      </Box>
    </>
  )
}
export default HeaderPages



