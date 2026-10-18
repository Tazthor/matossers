"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import BasesLogos25 from "@/components/sections/BasesLogos25";

export default function Page() {
  return (
    <>
      <Navbar page="" />
      <Margin desktop="120px" />
      <Header img="url('/images/headers/headerquisom.jpg')" title="CONCURS DE LOGOS 25è ANIVERSARI" />
      <Margin desktop="30px" />
      <BasesLogos25 />
      <Margin desktop="60px" />
    </>
  );
}
