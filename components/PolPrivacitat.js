import React from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";
import Title from "./Title";
import Link from "next/link";

export const PolPrivacitat = function (props) {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto" maxW="2500px" fontSize="md">
      <Title header="1" text="Política de privacitat" />
      <Text mb="20px">
        El domini web{" "}
        <Link href="http://www.matossers.cat" className="link">
          www.matossers.cat
        </Link>{" "}
        és propietat de La Colla Castellera Matossers de Molins de Rei i com a
        responsable del tractament garanteix un nivell adequat i coherent de
        protecció de les persones físiques respecte a les seves dades personals
        d’acord amb el que estableix el Reglament Europeu de Protecció de dades
        679/2016 i la Llei Orgànica 3/2018 de Protecció de Dades Personals i
        garantia de Drets Digitals. Tractarà les seves dades personals amb total
        lleialtat i compromís d’acord amb les bases jurídiques que permetin la
        licitud del tractament.
      </Text>
      <Text mb="20px">
        Per dona compliment al Reglament 679/2016 i la Llei orgànica 3/2018,
        s’ha elaborat un registre d’activitats de tractament i s’han adoptat les
        mesures de seguretat tant tècniques com organitzatives necessàries per
        garantir els drets i llibertats de les persones afectades pel tractament
        realitzats per La Colla Castellera Matossers de Molins de Rei. A més
        aplica el principi de transparència en tractament de dades personals,
        facilitant a les persones una informació concisa, fàcilment accessible,
        completa i amb un llenguatge fàcil d’entendre i alhora facilitant
        l’exercici de drets per mitjà de formularis. Responsable del tractament:
        La Colla Castellera Matossers de Molins de Rei
      </Text>
      <Text mb="20px">
        <strong>NIF:</strong> G62848353
        <br />
        <strong>Adreça postal:</strong> C/ Carrer Jacint Verdaguer, 48.
        Federació Obrera, 08759 Molins de Rei
        <br />
        <strong>Telèfon:</strong>{" "}
        <Link href="tel:669840867" className="link">
          669 84 08 67
        </Link>
        <br />
        <strong>Correu electrònic:</strong>{" "}
        <Link href="mailto:matossers@matossers.cat" className="link">
          matossers@matossers.cat
        </Link>
      </Text>
      <Text fontWeight={600} mb="10px">
        Finalitat del tractament i legitimació:
      </Text>
      <Text mb="10px">
        A través del nostre lloc web tractarem les seves dades per a les
        següents finalitats:
      </Text>
      <List mb="20px" listStyleType="disc">
        <ListItem mb="10px">
          Poder gestionar la seva sol·licitud de soci, legitimats per
          l’establiment de la relació contractual que es fonamenta en l’article
          6.1.b del RGPD 679/2016.
        </ListItem>
        <ListItem mb="10px">
          Atendre els seus dubtes, consultes i suggeriments, legitimats pel seu
          consentiment atorgat per vostè en posar-se en contacte amb nosaltres
          que es fonamenta en l’article 6.1.a del RGPD 679/2016 i pel nostre
          interès legítim de poder relacionar-nos amb els nostres usuaris, que
          es fonamenta en l’article 6.1.f del RGPD 679/2016.
        </ListItem>
      </List>
      <Text mb="20px">
        Així mateix, la nostra entitat tractarà dades personals amb la finalitat
        de poder gestionar les activitats pròpies i contractacions de serveis,
        legitimats per l’establiment de la relació contractual que es fonamenta
        en l’article 6.1.b del RGPD 679/2016.
      </Text>
      <Text fontWeight={600} mb="10px">
        Conservació
      </Text>
      <Text mb="20px">
        Les seves dades seran conservades per poder dur a terme les finalitats
        per les quals van ser recollides i tractades, una vegada que aquestes
        finalitzin es destruiran i guardarem únicament les estrictament
        necessàries per poder resoldre reclamacions.
      </Text>
      <Text fontWeight={600} mb="10px">
        Destinataris de les seves dades
      </Text>
      <Text mb="20px">
        Les dades personals tractades per La Colla Castellera Matossers de
        Molins de Rei, podran ser cedides a l’administració pública per
        obligació legal.
      </Text>
      <Text fontWeight={600} mb="10px">
        Drets dels interessats
      </Text>
      <Text mb="20px">
        Com a usuari del web{" "}
        <Link href="http://www.matossers.cat" className="link">
         www.matossers.cat
        </Link>
        , la persona interessada té dret a accedir, rectificar o sol·licitar la
        supressió de les seves dades, quan consideri que ja no són necessàries
        per a la finalitat per la qual van ser recollides, i a sol·licitar la
        limitació del tractament d’aquestes, que en tal cas només es conservaran
        les estrictament necessàries per portar a terme l’exercici de possibles
        reclamacions. Per poder exercir aquests drets s’ha de posar en contacte
        amb La Colla Castellera Matossers de Molins de Rei dirigint-se a{" "}
        <Link href="mailto:matossers@matossers.cat" className="link">
          matossers@matossers.cat
        </Link>
      </Text>
      <Text mb="20px">
        Així mateix, en cas de no estar satisfet amb l’atenció de la seva
        sol·licitud de drets, té dret a presentar una reclamació davant {" "}
        <Link href="http://www.aepd.es" className="link">
          www.aepd.es</Link>
      </Text>
    </Box>
  );
};
export default PolPrivacitat;
