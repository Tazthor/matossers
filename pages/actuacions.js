import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { initApp, getDataCollection } from "../utils/utils";


export default function Actuacions() {
  const [data, setData] = useState()
  const [app, setApp] = useState()
  const [dataAct, setDataAct] = useState()
  const [isLoading, setIsLoading] =  useState(false)

  const getData= async (app) => {
    const object = await getDataCollection(app, "actuacions")
    setDataAct(object);
}

  useEffect(() => {
    setApp(initApp())
    getData(app);
  }, [])


  console.log("arriba:" + dataAct)
  
  return (
    <Container>
      <Navbar page="musics" />
      <Margin desktop="230px" />
      Prova
      <Margin desktop="230px" />
      <Footer />
    </Container>
  );
}
