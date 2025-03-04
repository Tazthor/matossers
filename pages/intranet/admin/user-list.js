import { useContext, useState, useEffect } from "react";
import userContext from "../../../context/userContext";
import { Container } from "../../../components/Container";
import Margin from "../../../components/Margin";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  initApp,
  getDataCollection,
  transformDataWithIcon,
} from "../../../utils/utils";
import { Spinner, Text } from "@chakra-ui/react";
import Title from "../../../components/Title";
import { useRouter } from "next/router";
import UserGrid from "../../../components/intranet/UserGrid";

export default function ProvaList() {
  const [app, setApp] = useState(initApp());
  const [data, setData] = useState([]);
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (context.user.role == "default") {
      router.push("/intranet");
    } else {
      if (app == undefined) {
        setApp(initApp());
      }
      getData(app);
      setIsLoading(false);
    }
  }, [app, context.user.role, router, router.isReady]);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "usuaris");
    setData(dades);
  };

  console.log(data);
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
      )) || (
        <>
          <Title
            header="2"
            text="Usuaris"
            color={"argila"}
            textTransform={"uppercase"}
          />
          <UserGrid data={data} />
        </>
      )}
    </Container>
  );
}
