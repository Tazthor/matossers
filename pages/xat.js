import { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { initApp, getDataCollection, setXatCollection } from "../utils/utils";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Xat() {
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [app, setApp] = useState();
  const [dataXat, setDataXat] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [nom, setNom] = useState("");
  const [msg, setMsg] = useState("");

  const getData = async (app) => {
    const dades = await getDataCollection(app, "xat");
    /*     const xat = []
    var limit = dades.length-5
   
    for (let index = limit ; index < dades.length; index++) {
      xat.push(dades[index])
    } 
 */ setDataXat(dades);
    sortData()
    setIsLoading(false);
  };

  const setData = async (nom, msg) => {
    const response = await setXatCollection(nom, msg);
    if (response) {
      setIsLoading(true);
      setIsSorted(false);
      getData(app);
    }
  };

  const sortData = () => {
    setIsSorted(false);
    dataXat = dataXat.sort((a, b) =>
      a.data > b.data ? 1 : b.data > a.data ? -1 : 0
    );
    setIsSorted(true);
  };

  useEffect(() => {
    if (context.role == "public" || context.role == "default") {
      router.push("/");
    } else {
      if (app == undefined) {
        setApp(initApp());
      }
      getData(app);
    }
  }, []);

  useEffect(() => {
    sortData()

  }, [dataXat]);

  return (
    <Container>
      <Navbar page="recursos" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headerxat.jpg"
        textVisible={true}
        text="Xat"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      {isLoading ||
        (!isSorted && (
          <Spinner
            color="argila"
            size="xl"
            emptyColor="gray.200"
            thickness="4px"
          />
        )) || (
          <>
            <Box
              w={{ base: "90%", md: "80%", xl: "75%" }}
              m="auto"
              bg="#D0D0D0"
              p="30px"
              borderRadius="21px"
              border="1px solid black"
            >
              {isSorted &&
                dataXat.map((item, index) => {
                  return (
                    <Flex fontFamily="monospace" fontSize={"md"} key={index}>
                      <Text>
                        {item.nom} -{item.data.toDate().toLocaleString("ca-Es")}{" "}
                        - {item.msg}
                      </Text>
                    </Flex>
                  );
                })}
            </Box>
            <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" mt="40px">
              <form action="javascript:void(0);">
                <FormControl isRequired my="10px">
                  <InputGroup borderColor="argila">
                    <Input
                      placeholder="Nom"
                      _placeholder={{ color: "argila" }}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired my="10px">
                  <InputGroup borderColor="argila">
                    <Textarea
                      placeholder="Missatge"
                      _placeholder={{ color: "argila" }}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                {/*                 {error.isError && (
                  <Text w="100%" mt="15px" color="#ff0000" textAlign="center">
                    {error.msgError}
                  </Text>
                )}
 */}{" "}
                <Button
                  type="submit"
                  my="15px"
                  px="60px"
                  borderRadius="8px"
                  borderColor="argila"
                  border="1px solid"
                  bg="argila"
                  color="#fff"
                  fontSize="md"
                  fontWeight={400}
                  _hover={{ backgroundColor: "transparent", color: "argila" }}
                  onClick={() => setData(nom, msg)}
                >
                  Envia
                </Button>
              </form>
            </Box>
          </>
        )}
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
