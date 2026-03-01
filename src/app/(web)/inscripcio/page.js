"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import FormAlta from "@/components/forms/FormAlta";

export default function Page() {
  return (
    <>
      <Navbar page="inscripcio" />
      <Margin desktop="120px" />
      <FormAlta />
      <Margin desktop="60px" />
    </>
  );
}
