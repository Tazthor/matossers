import React, { useState } from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import actuacions from "../public/data/actuacions.json";
import Title from "./Title";

const dateFormat = function (data) {
  const [day, month, year] = data.split("/");
  var dateprov = year + "-" + month + "-" + day;
  var dataFormat = new Date(dateprov).toISOString();
  return dataFormat;
};

export const ProperaAct = function (props) {
  var dateNow = new Date().toISOString();
  var properaAct = actuacions.find(
    (actuacio) =>
      dateFormat(actuacio.data_curta) >= dateNow && actuacio.actuacio.length > 0
  );

  return (
    <>
      <Box mb="25px">
        <Title header="2" text="Propera actuació" />
      </Box>
      {(properaAct != undefined && (
        <Box fontSize="medium" lineHeight="28px">
          <Text mb="15px" fontSize="xl" fontWeight={600}>
            {properaAct.actuacio}
          </Text>
          <Flex mt="10px">
            <Box mr="5px" w="100px" fontWeight={600}>
              Data:{" "}
            </Box>
            <Box ml="5px">
              <Text>
                {properaAct.data_llarga}
                <br />a les {properaAct.hora}h
              </Text>
            </Box>
          </Flex>
          <Flex mt="10px">
            <Box mr="5px" w="100px" fontWeight={600}>
              Lloc:{" "}
            </Box>
            <Box ml="5px">
              <Text>
                {properaAct.lloc != "" ? properaAct.lloc : ""}{" "}
                {properaAct.poblacio != "" ? properaAct.poblacio : ""}
              </Text>
            </Box>
          </Flex>
          <Box mt="10px">
            <Text fontWeight={600}>Colles:</Text>
            {properaAct.colles.map((colla, i) => (
              <Box key={i} ml="105px">
                {colla}
              </Box>
            ))}
          </Box>
        </Box>
      )) || <Text>Actualment no hi ha actuacions previstes al calendari</Text>}
    </>
  );
};
export default ProperaAct;
