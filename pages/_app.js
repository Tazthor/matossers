import "../styles/globals.css";
import "../styles/fonts.css";
import { useState } from "react";
import  userContext from "../context/userContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

function Matossers({ Component, pageProps }) {
  const [user, setUser] = useState({ uid: "", email: "", name: "", role: "default" }); 
  //const [role, setRole] = useState('default')
  return (
    <ChakraProvider theme={theme}>
      <userContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
      </userContext.Provider>
    </ChakraProvider>
  );
}

export default Matossers;
