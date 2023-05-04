import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { initApp, loginWithGoogle, getDataCollectionUser } from "../utils/utils";
import { useState, useEffect } from "react";

export const Login = function () {
  const [user, setUser] = useState(null);
  const [app, setApp] = useState();
  const [currentUser, setCurrentUser] = useState(null);

   const getDataUser = async (app, user) => {
    const object = await getDataCollectionUser(app, "users", user);
    setCurrentUser(object);
  };

   useEffect(() => {
    if (app == undefined) {
      setApp(initApp());
    }
  }, []);

 
  const Googleclic = async () => {
    const usuaritemp = await loginWithGoogle(app);
    if (usuaritemp) {
      setUser(usuaritemp);
      getDataUser(app, user);
    }
    console.log(currentUser);

  };

  return <Button onClick={() => Googleclic()}>Loguejat</Button>;
};
export default Login;
