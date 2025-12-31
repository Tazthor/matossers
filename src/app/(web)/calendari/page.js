'use client';
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";

export default function Page() {
  return (
  <>
    <Navbar page="calendari" />
    <Margin desktop="120px" />
    <Header img="url('/images/headers/headercalendari.jpg')" title="Calendari d'actuacions" />
  </>
  )
}