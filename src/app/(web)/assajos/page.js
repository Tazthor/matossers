"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import AssaigHorari from "@/components/sections/AssaigHorari";
import AssaigLloc from "@/components/sections/AssaigLloc";

export default function Page() {
  return (
    <>
      <Navbar page="assajos" />
      <Margin desktop="120px" />
      <Header img="url('/images/headers/headerassajos.jpg')" title="Assajos" />
      <Margin desktop="30px" />
      <AssaigHorari />
      <Margin desktop="20px" />
      <AssaigLloc/>
      <Margin desktop="60px" />
    </>
  );
}
