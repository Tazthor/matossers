"use client";
import { Flex, Spinner } from "@chakra-ui/react";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import InfoMusics from "@/components/sections/InfoMusics";
import { useState, useEffect } from "react";
import { initApp, getDataCollection } from "../../utils/utils";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const app = initApp();
  const [data, setData] = useState([]);
/* 
  useEffect(() => {
    const getData = async () => {
      const object = await getDataCollection(app, "musics");

      setData(object[0]);
      setIsLoading(false);
    };

    getData();
  }, [app]);
 */
  return (
    <>
      <Navbar page="musics" />
      <Margin desktop="120px" />
      <Header img="url('/images/headers/headermusics.jpg')" title="Musics" />
      <Margin desktop="60px" />
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
        <InfoMusics data={data} />
      )}
      <Margin desktop="60px" />
    </>
  );
}
