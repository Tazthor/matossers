"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import BlocText from "@/components/sections/BlocText";
import Header from "@/components/sections/Header";
import Topics from "@/components/sections/Topics";
import { initApp, getDataCollection } from "../utils/utils";
import { Spinner } from "@chakra-ui/react";
import GridCalendari from "@/components/sections/GridCalendari";
import { useState, useEffect } from "react";

export default function Page() {
  const app = initApp();
  const [dataAct, setDataAct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const object = await getDataCollection(app, "actuacions");

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
      <Navbar page="" />
      <Margin desktop="120px" />
      <Header img="url('/images/home/header.jpg')" home />
      <Margin desktop="60px" />
      <Topics />
      <Margin desktop="60px" />
      <BlocText />
      {isLoading ? (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      ) : (
        <GridCalendari dataAct={dataAct} properaOnly />
      )}
    </>
  );
}
