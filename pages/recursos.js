import { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";

import {
  Box,
  Flex,
  Text,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Recursos() {
  const context = useContext(userContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (context.role == "public" || context.role == "default") {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      {(isLoading && (
        <Spinner
          color="argila"
          size="xl"
          emptyColor="gray.200"
          thickness="4px"
        />
      )) || (
        <>
          <Navbar
            page="recursos"
            role={context.role}
            setRole={context.setRole}
          />
          <Margin desktop="100px" />
          <HeaderPages
            img="/images/headers/headermusics.jpg"
            textVisible={true}
            text="Recursos"
          />
          <Margin desktop="40px" tablet="50px" mobile="20px" />
          <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
            {context.role == "admin" ||
              context.role == "tecnica" ||
              context.role == "casteller" && (
                <Box>
                  <Title header="2" text="Llistes d'assistència"></Title>
                  <Title header="2" text="Documents legals"></Title>
                </Box>
              )}
            {(context.role == "admin" || context.role == "tecnica") && (
              <Box>
                <Title header="2" text="Pinyes"></Title>
              </Box>
            )}
          </Box>
          <Margin desktop="80px" mobile="40px" />
          <Footer />
        </>
      )}
    </Container>
  );
}
