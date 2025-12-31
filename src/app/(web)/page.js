"use client";
import Margin from "@/components/general/Margin";
import Navbar from "@/components/general/Navbar";
import Header from "@/components/sections/Header";
import Topics from "@/components/sections/Topics";

export default function Page() {
  return (
    <>
      <Navbar page="" />
      <Margin desktop="120px" />
      <Header img="url('/images/home/header.jpg')" home />
      <Margin desktop="60px" />
      <Topics />
      <Margin desktop="60px" />
    </>
  );
}
