import { useContext, useState, useEffect } from "react";
import userContext from "../../../context/userContext";
import { Container } from "../../../components/Container";
import Margin from "../../../components/Margin";
import { initApp, getDataCollection } from "../../../utils/utils";
import { Flex, Spinner, Text, useToast, useDisclosure } from "@chakra-ui/react";
import Title from "../../../components/Title";
import { useRouter } from "next/router";
import UserGrid from "../../../components/intranet/UserGrid";
import { validateUser, deleteUser, updateRoles } from "../../../utils/login";
import { MdArrowBack } from "react-icons/md";

export default function UserList() {
  const [app, setApp] = useState(initApp());
  const [data, setData] = useState([]);
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editRoles, setEditRoles] = useState(false);

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
    console.log(dades)
    const dataSorted = [...dades].sort(
      (a, b) => b.createdAt.seconds - a.createdAt.seconds
    );
    setData(dataSorted);
  };

  const handleValidateUser = async (uid) => {
    setIsLoading(true);
    let trigger = await validateUser(uid);
    if (trigger) {
      getData(app);
      setIsLoading(false);
    }
  };

  const rmUser = async (uid, removeCasteller) => {
    setIsLoading(true);
    const response = await deleteUser(uid, removeCasteller);
    getData(app);
    if (response == "okRmAll") {
      onClose();
      toast({
        title: "L'usuari ha estat eliminat correctament.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else if (response == "okRmUser") {
      onClose();
      toast({
        title: "S'ha donat de baixa un casteller.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      onClose();
      toast({
        title: response,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  const changeRole = (uid, newRole) => {
    updateRoles(uid, newRole);
    getData(app);
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
          <UserGrid
            data={data}
            setData={setData}
            handleValidateUser={handleValidateUser}
            rmUser={rmUser}
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            changeRole={changeRole}
          />
        </>
      )}
    </Container>
  );
}
