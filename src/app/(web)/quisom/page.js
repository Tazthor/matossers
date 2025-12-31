'use client';
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";

export default function Page() {
  return (
  <>
    <Navbar page="quisom" />
    <Margin desktop="120px" />
    <Header img="url('/images/headers/headerquisom.jpg')" title="qui som?" />
  </>
  )
}