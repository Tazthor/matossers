import { Image, Box, Text, Flex } from "@chakra-ui/react";
import actuacions from "../public/data/actuacions.json";
import { useState } from "react";

const dateFormat = function (data) {
  const [day, month, year] = data.split("/");
  var dateprov = year + "-" + month + "-" + day;
  var dataFormat = new Date(dateprov).toISOString();
  return dataFormat;
};

export const ProperaAct = function (props) {
  var dateNow = new Date().toISOString();
  const [firstItem, setFirstItem] = useState(true);
  const [arrayAct, setArrayAct] = useState({});
  return (
    <>
      <Box>
        <Text className="title">Propera actuació</Text>
        {actuacions.map((act, index) => {
          var data = dateFormat(act.data_curta);
          if (data >= dateNow && firstItem) {
            setArrayAct(act);
            setFirstItem(false);
          }
        })}
        <Box fontSize="medium" lineHeight="28px">
          <Text mb="5px" fontSize="xl" fontWeight={600} color="argila.500">
            {arrayAct.actuacio}
          </Text>
          <Flex>
            <Box mr="5px" fontWeight={600}>
              Data:{" "}
            </Box>
            <Box ml="5px">
              <Text>
                {arrayAct.data_llarga}
                <br />a les {arrayAct.hora}h
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box mr="5px" fontWeight={600}>
              Lloc:{" "}
            </Box>
            <Box ml="5px">
              <Text>
                {arrayAct.lloc != "" ? arrayAct.lloc : ""}{" "}
                {arrayAct.poblacio != "" ? arrayAct.poblacio : ""}
              </Text>
            </Box>
          </Flex>
          <Box>
            <Text fontWeight={600}>Colles:</Text>
            {
            for (let i = 0; i < arrayAct.colles.length; i++) {
              <Box ml="15px">{arrayAct.colles[i]}</Box>
            }
            }
{/*             {arrayAct.colles.map((colla, i) => (
              <Box key={i} ml="15px">
                {colla}
              </Box>
            ))}
 */}           </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProperaAct;
