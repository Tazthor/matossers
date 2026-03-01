"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import GridDades from "@/components/sections/GridDades";
import { getDataCollection } from "../../utils/utils";
import { useState, useEffect } from "react";
import Juntes from "@/components/sections/Juntes";

export default function Page() {
  const [data, setData] = useState([]);
  const [junta, setJunta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const dades = await getDataCollection("dada");
      const juntes = await getDataCollection("juntes");
console.log(dades)
      setJunta(juntes);
      setData(dades);
      setIsLoading(false);
    };

    getData();
  }, []);
  return (
    <>
      <Navbar page="quisom" />
      <Margin desktop="120px" />
      <Header img="url('/images/headers/headerquisom.jpg')" title="qui som?" />
      <GridDades dades={data} />
      <Juntes junta={junta} />
    </>
  );
}
