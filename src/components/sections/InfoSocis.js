'use client';
import {
  Box,
  Text,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";
import CardQuota from "./CardQuota";

export const InfoSocis = function ({ quotes }) {
  return (
    <Box w={{ base: "90%", md: "80%", xl: "75%" }} m="auto">
      <Heading
        fontSize={{ base: "xl", md: "xxl" }}
        lineHeight="normal"
        color="argila"
        textTransform="uppercase"
      >
        Per què tenim socis?
      </Heading>
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
      <Heading
        fontSize={{ base: "xl", md: "xxl" }}
        lineHeight="normal"
        color="argila"
        textTransform="uppercase"
      >
        Quant he de pagar?
      </Heading>
      <Text my="20px">
        Cal dir que aquestes quotes són mínimes i que es podrien ampliar si el
        soci/a ho desitja.
      </Text>
      <Grid
        w="100%"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
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
