import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Title from "./Title";

export const PolCookies = function (props) {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" maxW="2500px" fontSize="md">
      <Title header="1" text="Política de cookies" />
      <Text mb="20px">
        L’accés a aquest Lloc web pot implicar la utilització de cookies. Les
        cookies són petites quantitats d’informació que s’emmagatzemen en el
        navegador utilitzat per cada Usuari —en els diferents dispositius que
        pugui utilitzar per a navegar— perquè el servidor recordi una certa
        informació que posteriorment i únicament el servidor que la va
        implementar llegirà. Les cookies faciliten la navegació, la fan més
        amigable, i no danyen el dispositiu de navegació.
      </Text>
      <Text mb="20px">
        Les cookies són procediments automàtics de recollida d’informació
        relativa a les preferències determinades per l’Usuari durant la seva
        visita al Lloc web amb la finalitat de reconèixer-lo com a Usuari, i
        personalitzar la seva experiència i l’ús del Lloc web, i poden també,
        per exemple, ajudar a identificar i resoldre errors.
      </Text>
      <Text mb="20px">
        La informació recaptada a través de les cookies pot incloure la data i
        hora de visites al Lloc web, les pàgines visionades, el temps que ha
        estat en el Lloc web i els llocs visitats just abans i després d’aquest.
        No obstant això, cap cookie permet que aquesta mateixa pugui
        contactar-se amb el número de telèfon de l’Usuari o amb qualsevol altre
        mitjà de contacte personal. Cap cookie pot extreure informació del disc
        dur de l’Usuari o robar informació personal. L’única manera que la
        informació privada de l’Usuari formi part de l’arxiu Cookie és que
        l’usuari doni personalment aquesta informació al servidor.
      </Text>
      <Text mb="20px">
        Les cookies que permeten identificar a una persona es consideren dades
        personals. Per tant, a les mateixes els serà aplicable la Política de
        Privacitat anteriorment descrita. En aquest sentit, per a la utilització
        de les mateixes serà necessari el consentiment de l’Usuari. Aquest
        consentiment serà comunicat, sobre la base d’una elecció autèntica,
        ofert mitjançant una decisió afirmativa i positiva, abans del tractament
        inicial, amovible i documentat.
      </Text>

      <Text fontWeight={600} mb="10px">
        Cookies pròpies
      </Text>
      <Text mb="20px">
        Són aquelles cookies que són enviades a l’ordinador o dispositiu de
        l’Usuari i gestionades exclusivament per la Colla Castellera Matossers
        de Molins de Rei per al millor funcionament del Lloc web. La informació
        que es recapta s’empra per a millorar la qualitat del Lloc web i el seu
        Contingut i la seva experiència com a Usuari. Aquestes cookies permeten
        reconèixer a l’Usuari com a visitant recurrent del Lloc web i adaptar el
        contingut per a oferir-li continguts que s’ajustin a les seves
        preferències.
      </Text>

      <Text fontWeight={600} mb="10px">
        Cookies de tercers
      </Text>
      <Text mb="20px">
        Són cookies utilitzades i gestionades per entitats externes que
        proporcionen a Colla Castellera Matossers de Molins de Rei serveis
        sol·licitats per aquest mateix per a millorar el Lloc web i
        l’experiència de l’usuari en navegar en el Lloc web. Els principals
        objectius per als quals s’utilitzen cookies de tercers són l’obtenció
        d’estadístiques d’accessos i analitzar la informació de la navegació, és
        a dir, com interactua l’Usuari amb el Lloc web.
      </Text>
      <Text mb="20px">
        La informació que s’obté es refereix, per exemple, al nombre de pàgines
        visitades, l’idioma, el lloc a la qual l’adreça IP des del qual accedeix
        l’Usuari, el nombre d’Usuaris que accedeixen, la freqüència i
        reincidència de les visites, el temps de visita, el navegador que usen,
        l’operador o tipus de dispositiu des del qual es fa la visita. Aquesta
        informació s’utilitza per a millorar el Lloc web, i detectar noves
        necessitats per a oferir als Usuaris un Contingut i/o servei d’òptima
        qualitat. En tot cas, la informació es recopila de manera anònima i
        s’elaboren informes de tendències del Lloc web sense identificar a
        usuaris individuals.
      </Text>
      <Text mb="20px">
        Les entitats encarregades del subministrament de cookies podran cedir
        aquesta informació a tercers, sempre que l’exigeixi la llei o sigui un
        tercer el que processi aquesta informació per a aquestes entitats.{" "}
      </Text>

      <Text fontWeight={600} mb="10px">
        Deshabilitar, rebutjar i eliminar cookies
      </Text>
      <Text mb="20px">
        L’Usuari pot deshabilitar, rebutjar i eliminar les cookies —totalment o
        parcialment— instal·lades en el seu dispositiu mitjançant la
        configuració del seu navegador (entre els quals es troben, per exemple,
        Chrome, Firefox, Safari, Explorer). En aquest sentit, els procediments
        per a rebutjar i eliminar les cookies poden diferir d’un navegador
        d’Internet a un altre. En conseqüència, l’Usuari ha d’acudir a les
        instruccions facilitades pel mateix navegador d’Internet que estigui
        utilitzant. En el cas que rebutgi l’ús de cookies —totalment o
        parcialment— podrà continuar usant el Lloc web, si bé podrà tenir
        limitada la utilització d’algunes de les prestacions d’aquest.
      </Text>
    </Box>
  );
};
export default PolCookies;
