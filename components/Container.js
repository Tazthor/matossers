import React from 'react'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'


export const Container = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={props.ogurl}/>
        <meta property="og:title" content="Colla castellera Matossers de Molins de Rei"/>
        <meta property="og:image" content={"https://matossers.cat/images/home/header.jpg"}/>
        <meta name="twitter:image" content="https://matossers.cat/images/home/header.jpg"/>
        <meta name="twitter:title" content="Colla castellera Matossers de Molins de Rei"/>
        <meta property="og:description" content="Colla castellera Matossers de Molins de Rei"/>
        <meta property="og:site_name" content="Colla castellera Matossers de Molins de Rei"/>
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32"></link>
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="16x16"></link>
        <title>Matossers de Molins de Rei</title>
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor="#ffffff"
        color="#000000"
        maxW="2500px"
        m="auto"
        fontSize={"normal"}
        fontFamily="Merriweather Sans"
        {...props}
      />
    </>
  )
}