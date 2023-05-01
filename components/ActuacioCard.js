import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { MdPhotoCamera } from "react-icons/md";

export const ActuacioCard = function ({ act, type }) {
  const optionsLarge = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const optionsShort = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const optionTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return (
    <Box fontSize="medium" lineHeight="28px" my="16px">
      <Text mb="5px" fontSize="xl" fontWeight={600}>
        {act.actuacio}
      </Text>
      <Box w="80%" my="10px" borderTop="3px dashed #663b30"></Box>
      <Flex>
        <Box mr="5px" fontWeight={600}>
          Data:
        </Box>
        <Box ml="5px">
          <Text>
            {type == "futures"
              ? act.data.toDate().toLocaleString("ca-ES", optionsLarge)
              : act.data.toDate().toLocaleString("ca-ES", optionsShort)}
          </Text>
          {type == "futures" && (
            <Text>
              a les {act.data.toDate().toLocaleTimeString("ca-ES", optionTime)}{" "}
              h
            </Text>
          )}
        </Box>
      </Flex>
      <Flex>
        <Box mr="5px" fontWeight={600}>
          Lloc:
        </Box>
        <Box ml="5px">
          <Text>
            {act.lloc != undefined && type == "futures" ? act.lloc + "," : ""}{" "}
            {act.poblacio != "" ? act.poblacio : ""}
          </Text>
        </Box>
      </Flex>
      {type == "futures" && (
        <Box>
          <Text fontWeight={600}>Colles:</Text>
          {act.colles.map((colla, i) => (
            <Box key={i} ml="15px">
              {colla}
            </Box>
          ))}
        </Box>
      )}
      {type == "passades" && (
        <Box>
          {act.resultat && (
            <>
              <Text fontWeight={600}>Castells:</Text>
              {act.resultat.map((castell, i) => {
                return (
                  (i < act.resultat.length - 2 && (
                    <Box display="inline" key={i}>
                      {castell},{" "}
                    </Box>
                  )) ||
                  (i < act.resultat.length - 1 && (
                    <Box display="inline" key={i}>
                      {castell}{" "}
                    </Box>
                  )) ||
                  (i == act.resultat.length - 1 && (
                    <Box display="inline" key={i}>
                      {" "}
                      i {castell}
                    </Box>
                  ))
                );
              })}
            </>
          )}
          {act.galeria && (
            <Box>
              <Button
                my="15px"
                px="10px"
                borderRadius="8px"
                borderColor="argila"
                border="1px solid"
                bg="argila"
                color="#fff"
                fontSize="md"
                fontWeight={400}
                _hover={{ backgroundColor: "transparent", color: "argila" }}
                onClick={() => window.open(act.galeria, "_blank")}
                leftIcon={<MdPhotoCamera size="20px" />}
              >
                Fotografies
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
export default ActuacioCard;
