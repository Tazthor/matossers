import { useContext, useState, useEffect } from "react";
import userContext from "../../../context/userContext";
import { Container } from "../../../components/Container";
import Margin from "../../../components/Margin";
import { initApp, getDataCollection } from "../../../utils/utils";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import Title from "../../../components/Title";
import { useRouter } from "next/router";
import UserGrid from "../../../components/intranet/UserGrid";
import { validateUser } from "../../../utils/login";
import { MdArrowBack } from "react-icons/md";

export default function UserList() {
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

  const handleValidateUser = async (uid) => {
    setIsLoading(true);
    let trigger = await validateUser(uid);
    console.log(trigger);
    if (trigger) {
      getData(app);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Margin desktop="80px" />
      {(isLoading && (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      )) || (
        <>
          <Flex
            w={{ base: "90%", md: "80%", xl: "75%" }}
            mx="auto"
            mb="20px"
            onClick={() => router.push("../panell")}
            gap="2"
            alignItems="center"
            color="gris.700"
          >
            <MdArrowBack size="20px" />
            <Text fontWeight="bold">Tornar</Text>
          </Flex>

          <Title
            header="2"
            text="Usuaris"
            color={"argila"}
            textTransform={"uppercase"}
          />
          <UserGrid data={data} handleValidateUser={handleValidateUser} />
        </>
      )}
    </Container>
  );
}
