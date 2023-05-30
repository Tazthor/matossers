import React from "react";
import { Box, Link } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";

export const Cookies = function (props) {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepto"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#663b30"}}
      buttonStyle={{ background: "#f8e93b", color: "#000", fontSize: "13px", width: "150px", verticalAlign: "-webkit-baseline-middle" }}
      expires={150}
    >
      <Box w={{base:"90%",md:"80%",xl:"70%"}}>
      Aquesta web utilitza galetes de tercers perquè tingui una millor experiència d'usuari.
      Si continua navegant està donant el seu consentiment d'acceptació de les mencionades galetes i l'acceptació de la nostra <Link href="/politica-cookies" color="groc.mat">política de cookies</Link>.
      </Box>
    </CookieConsent>
  );
};
export default Cookies;
