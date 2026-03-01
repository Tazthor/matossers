'use client';
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import { Spinner, Flex } from "@chakra-ui/react";
import GridCalendari from "@/components/sections/GridCalendari";
import { useState, useEffect } from "react";
import { getDataCollection } from "../../utils/utils";

export default function Page() {
    const [dataAct, setDataAct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const getData = async () => {
        const object = await getDataCollection("actuacions");
  
        const sorted = object.sort((a, b) =>
          a.data > b.data ? 1 : b.data > a.data ? -1 : 0
        );
  
        setDataAct(sorted);
        setIsLoading(false);
      };
  
      getData();
    }, []);
  return (
  <>
    <Navbar page="calendari" />
    <Margin desktop="120px" />
    <Header img="url('/images/headers/headercalendari.jpg')" title="Calendari d'actuacions" />
          <Margin desktop="40px" tablet="50px" mobile="20px" />
      {isLoading ? (
        <Flex w="100%" justifyContent="center">
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      </Flex>
      ) : (
        <GridCalendari dataAct={dataAct}/>
      )}
      <Margin desktop="80px" mobile="40px" />
  </>
  )
}