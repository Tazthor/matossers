import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import { Container } from "../components/Container";
import Margin from "../components/Margin";
import Navbar from "../components/Navbar";
import HeaderPages from "../components/HeaderPages";
import Title from "../components/Title";
import Footer from "../components/Footer";
import {
  initApp,
  getDataCollection,
  transformDataWithImages,
} from "../utils/utils";
import ReactMarkdown from "react-markdown";

import { Box, Flex, Text, Image, List, ListItem } from "@chakra-ui/react";

export default function Musics() {
  const [app, setApp] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(userContext);

  const getData = async (app) => {
    const dades = await getDataCollection(app, "musics");
    const dades_def = await transformDataWithImages(dades);
    setData(dades_def[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
    getData(app);
  }, []);
  console.log(data);
  return (
    <Container>
      <Navbar page="musics" role={context.role} setRole={context.setRole} />
      <Margin desktop="100px" />
      <HeaderPages
        img="/images/headers/headermusics.jpg"
        textVisible={true}
        text="Músics"
      />
      <Margin desktop="40px" tablet="50px" mobile="20px" />
      <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
        <Title header="2" text="Les nostres gralles i tabals"></Title>
        <Flex
          w="100%"
          justifyContent="center"
          display={{ base: "block", xl: "flex" }}
        >
          <Box
            w={{ base: "100%", xl: "48%" }}
            mr={{ base: "0", xl: "2%" }}
            mb={{ base: "30px", md: "0" }}
          >
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => <a className="" {...props} />,
                p: ({ node, ...props }) => (
                  <p className="isParagraph" {...props} />
                ),
                li: ({ node, ...props }) => <li className="listnotnumber" {...props} />,
              }}
            >
              {data.text}
            </ReactMarkdown>
          </Box>
          <Box
            w={{ base: "100%", xl: "48%" }}
            ml={{ base: "0", xl: "2%" }}
            my="30px"
          >
            <Image src={data.imageUrl} alt="Grallers i tabaleres" />
          </Box>
        </Flex>
      </Box>
      <Margin desktop="80px" mobile="40px" />
      <Footer />
    </Container>
  );
}
