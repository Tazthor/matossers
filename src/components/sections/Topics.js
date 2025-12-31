"use client";
import { useRouter } from "next/navigation";
import { Box, Text, Flex } from "@chakra-ui/react";
import { GoCalendar } from "react-icons/go";
import { MdEmojiPeople } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";

export const Topics = function () {
  const router = useRouter();

  const topcsList = [
    {
      icon: GoCalendar,
      title: "Consulta el calendari",
      description:
        "Totes les actuacions d'aquesta temporada, informació de les properes diades i també els resultats i fotografies de les diades anteriors. No t'ho perdis!",
      link: "/calendari",
    },
    {
      icon: MdEmojiPeople,
      title: "Vols fer castells?",
      description:
        "Només has de venir a un assaig, dimecres o divendres a les 20h a la Federació Obrera de Molins de Rei. T'hi esperem!",
      link: "/assajos",
    },
    {
      icon: RiHandHeartLine,
      title: "Vols fer-te soci?",
      description:
        "Amb la teva col·laboració farem més forta la colla i la cultura popular a Molins de Rei i a la comarca del Baix Llobregat.",
      link: "/fes-te-soci",
    },
  ];

  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Flex display={{ base: "block", md: "flex" }}>
        {topcsList.map((topic, index) => (
          <Flex
            key={index}
            p="10px 20px"
            w={{ base: "100%", md: "31%" }}
            mx={{ base: "0", md: "2%" }}
            border="1px rgba(0, 0, 0, 0.3)"
            boxShadow="0 6px 6px rgba(0, 0, 0, 0.3)"
            cursor="pointer"
            onClick={() => router.push(topic.link)}
            borderTop="3px solid #663b30"
          >
            <Box mx="auto" my="20px" textAlign="center">
              <Box w="40px" mx="auto" mb="20px">
                <topic.icon color="#663b30" size="36px" />
              </Box>
              <Text color="argila" fontWeight={700} fontSize="md">
                {topic.title}
              </Text>
              <Text my="20px" fontWeight={400}>
                {topic.description}
              </Text>
              <Text color="argila" fontWeight={700} fontSize="md">
                + Més informació
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
export default Topics;
