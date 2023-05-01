import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { initApp, loginWithGoogle } from "../utils/utils";
import { useState, useEffect } from "react";

export const Login = function () {
    const [user, setUser] = useState(null)
    const [app, setApp] = useState();

    useEffect(() => {
        if (app== undefined){ setApp(initApp());}
      }, []);
    

  const Googleclic = async () => {
    const usuaritemp = await loginWithGoogle(app);
    if(usuaritemp) {
        console.log(usuaritemp)

        setUser(usuaritemp)
    }
  };
  console.log(user)

  return <Button onClick={() => Googleclic()}>Loguejat</Button>;
};
export default Login;
