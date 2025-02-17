import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Grid,
  Link,
  GridItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Title from "../Title";
import CardQuota from "./CardQuota";

export const InfoSocis = function ({ quotes }) {
  const router = useRouter();

  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Title header="2" text="Per què tenim socis?"></Title>
      <Text mb="20px">
        Els Matossers de Molins de Rei tenim diferents vies de finançament per
        aconseguir mantenir l&apos;activitat castellera a Molins de Rei i oferir els
        nostres castells arreu, una de les més importants és l&apos;aportació de
        persones compromeses amb el fet casteller i amb la la vila de Molins de
        Rei, en forma de <strong>quotes anuals</strong>.
      </Text>
      <Text mb="20px">
        Per tal d&apos;oferir la possibilitat que qualsevol persona pugui ser sòcia
        de l&apos;entitat,{" "}
        <strong>
          hem establert diferents trams de quotes mínimes segons l&apos;edat o
          l&apos;estat laboral de la persona
        </strong>
        , així, tot i que la quota estàndard és per adults, els joves menors de
        25 anys i les persones jubilades gaudeixen d&apos;una quota reduïda. Així
        mateix, establim també una <strong>quota familiar</strong>, que podran
        gaudir els membres que convisquin sota un mateix sostre, aquesta quota
        és{" "}
        <strong>
          especialment adequada per families de tres o més membres
        </strong>
        .
      </Text>
      <Title header="2" text="Quant he de pagar?"></Title>
      <Text my="20px">
        Cal dir que aquestes quotes són mínimes i que es podrien ampliar si el
        soci/a ho desitja.
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          xxl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {quotes.map((quota, i) => {
          return <CardQuota key={i} item={quota} />;
        })}
      </Grid>
      <Text my="20px">
        Necessites ajuda o més informació?{" "}
        <Link href="/contacte" color="argila">
          Contacta&apos;ns i resoldrem els teus dubtes.
        </Link>
      </Text>
    </Box>
  );
};
export default InfoSocis;
