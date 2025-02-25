import { useContext, useState, useEffect } from "react";
import userContext from "../../context/userContext";
import { Container } from "../../components/Container";
import Margin from "../../components/Margin";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { initApp, getRealDB } from "../../utils/utils_intranet";
import { Spinner, Text } from "@chakra-ui/react";
import Title from "../../components/Title";
import { useRouter } from "next/router";
import AdminPanel from "../../components/intranet/AdminPanel";

export default function Panell() {
  const [app, setApp] = useState(initApp());
  const [data, setData] = useState([]);
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (context.user.role == "default") {
      router.push("/intranet");
    } else {
      setIsLoading(false);
    }
  }, []);

  /*   const getData = async (app) => {
    const dades = await getRealDB(app, "users");
    setData(dades);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []); */

  return (
    <Container>
      <Navbar />
      <Margin desktop="130px" />
      {(isLoading && (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      )) ||
      <>
      {context.user.role == "admin" && (<AdminPanel />)}
      {context.user.role == "casteller" && (<></>)}
      </>
      }
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
