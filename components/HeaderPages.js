import { Box, Text, Image } from '@chakra-ui/react'
import Title from '../components/Title'

export const HeaderPages = function (props) {
  return (
    <>
      <Box
        w="100%"
        position="relative"
        maxW="2500px"
      >
        <Box w="100%" h="auto">
          <Image
            w="100%"
            h={{base:"300px", md:"auto"}}
            objectFit="cover"
            src={props.img}
            alt="Capçalera"
          />
        </Box>
        {(props.textVisible) &&
          <Box position="absolute" textAlign="center" top={{base:"30%",md:"40%"}} left="0" right="0" m="auto">
            <Title header="1" text={props.text} color="groc.brillant"></Title>
          </Box>
        }
      </Box>
    </>
  )
}
export default HeaderPages



