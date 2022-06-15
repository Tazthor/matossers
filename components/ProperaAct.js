import React, { useState } from 'react';
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import actuacions from "../public/data/actuacions.json";
import Title from "./Title"

const dateFormat = function (data) {
  const [day, month, year] = data.split("/");
  var dateprov = year + "-" + month + "-" + day;
  var dataFormat = new Date(dateprov).toISOString();
  return dataFormat;
};

export const ProperaAct = function (props) {
  var dateNow = new Date().toISOString();
  const [firstItem, setFirstItem] = useState(true);

  return (
    <>
        <Box mb="25px"><Title header="2" text="Propera actuació" /></Box>
        {
          actuacions.map((act, index) => {
            var data = dateFormat(act.data_curta)
            if ((data >= dateNow)) {
              return (
                <Box fontSize="medium" key={index} lineHeight="28px">
                  <Text mb="5px" fontSize="xl" fontWeight={600} color="argila.500">{act.actuacio}</Text>
                  <Flex>
                    <Box mr="5px" fontWeight={600}>Data: </Box>
                    <Box ml="5px"><Text>{act.data_llarga}<br />a les {act.hora}h</Text></Box>
                  </Flex>
                  <Flex>
                    <Box mr="5px" fontWeight={600}>Lloc: </Box>
                    <Box ml="5px">
                      <Text>{(act.lloc != '') ? act.lloc : ''}{' '}{(act.poblacio != '') ? act.poblacio : ''}</Text>
                    </Box>
                  </Flex>
                  <Box >
                    <Text fontWeight={600}>Colles:</Text>
                    {
                      act.colles.map((colla, i) =>
                        <Box key={i} ml="15px">{colla}</Box>
                      )
                    }
                  </Box>
                </Box>
              )
            }
          })
        }
    </>
  );
};
export default ProperaAct;
