
import { useRouter } from "next/router";
import { Box, Text, Button, Flex, Image, Grid } from "@chakra-ui/react";
import Title from "./Title";
import { GoCalendar } from "react-icons/go";
import { MdEmojiPeople } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri"

export const Topics = function () {
  const router = useRouter();
  return (
    <Box w={{base:"90%", md:"80%", xl:"75%"}} m="auto">
      <Flex display={["block", "flex", "flex"]}>
        <Flex
          my="30px"
          p="10px 20px"
          w={{base:"100%", md:"31%"}}
          mr={{base:"0", md:"2%"}}
          mt={{base:"30px", md:"0"}}
          border="1px rgba(0, 0, 0, 0.3)"
          boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
          cursor="pointer"
          onClick={() => router.push("/calendari")}
          borderTop="3px solid #663b30"
        >
          <Box mx="auto" my="20px" textAlign="center">
            <Box w="40px" mx="auto">
              <GoCalendar color="#663b30" size="36px" />
            </Box>
            <br />
            <Text color="argila" fontWeight={900}>
              Consulta el calendari
            </Text>
            <Text my="20px">
              Totes les actuacions d'aquesta temporada, informació de les properes diades i també els resultats i fotografies de les diades anteriors. No t'ho perdis!
            </Text>
            <Text color="argila" fontSize="md">
              + Més informació
            </Text>
          </Box>
        </Flex>
        <Flex
          my="30px"
          p="10px 20px"
          w={{base:"100%", md:"30%"}}
          mx={{base:"0", md:"2%"}}
          mt={{base:"30px", md:"0"}}
          border="1px rgba(0, 0, 0, 0.3)"
          boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
          cursor="pointer"
          onClick={() => router.push("/assajos")}
          borderTop="3px solid #663b30"
        >
          <Box mx="auto" my="20px" textAlign="center">
            <Box w="40px" mx="auto">
              <MdEmojiPeople color="#663b30" size="36px" />
            </Box>
            <br />
            <Text color="argila" fontWeight={900}>
              Vols fer castells?
            </Text>
            <Text my="20px">
              Només has de venir a un assaig, dimecres o divendres a les 20h a
              la Federació Obrera de Molins de Rei. T'hi esperem!
            </Text>
            <Text color="argila" fontSize="md">
              + Més informació
            </Text>
          </Box>
        </Flex>
        <Flex
          my="30px"
          p="10px 20px"
          w={{base:"100%", md:"31%"}}
          ml={{base:"0", md:"2%"}}
          mt={{base:"30px", md:"0"}}
          border="1px rgba(0, 0, 0, 0.3)"
          boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
          cursor="pointer"
          onClick={() => router.push("/fes-te-soci")}
          borderTop="3px solid #663b30"
        >
          <Box mx="auto" my="20px" textAlign="center">
            <Box w="40px" mx="auto">
              <RiHandHeartLine color="#663b30" size="36px" />
            </Box>
            <br />
            <Text color="argila" fontWeight={900}>
              Vols fer-te soci?
            </Text>
            <Text my="20px">
              Amb la teva col·laboració farem més forta la colla i la cultura popular a Molins de Rei i a la comarca del Baix Llobregat.
            </Text>
            <Text color="argila" fontSize="md">
              + Més informació
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Topics;
