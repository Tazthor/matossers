"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import FormAlta from "@/components/forms/FormAlta";

export default function Page() {
  return (
    <>
      <Navbar page="assajos" />
      <Margin desktop="120px" />
      <Header img="url('/images/headers/headerassajos.jpg')" title="Assajos" />
      <Margin desktop="30px" />
      <FormAlta />
      <Margin desktop="60px" />
    </>
  );
}
