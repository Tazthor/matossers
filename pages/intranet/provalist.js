import { useContext, useState, useEffect } from "react";
import userContext from "../../context/userContext";
import { Container } from "../../components/Container";
import Margin from "../../components/Margin";
import Navbar from "../../components/Navbar";
import HeaderPages from "../../components/HeaderPages";
import Footer from "../../components/Footer";
import { initApp, getRealDB } from "../../utils/utils_intranet";
import { Spinner, Text } from "@chakra-ui/react";
import InfoMusics from "../../components/InfoMusics";
import Title from "../../components/Title";

export default function ProvaList() {
  const [app, setApp] = useState(initApp());
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const dades = await getRealDB(app, "users");
    setData(dades);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []);
console.log(data)
  return (
    <Container>
      <Navbar role={context.role} setRole={context.setRole} />
      <Margin desktop="130px" />
      <Title
        header="2"
        text="Usuaris"
        color={"argila"}
        textTransform={"uppercase"}
      />
      {data.map((user, i) => (
        <Text key={i}>{user.user}</Text>
      ))}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
