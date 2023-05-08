import React from 'react'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'


export const Container = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta property="og:type" content={props.ogtype}/>
        <meta property="og:url" content={props.ogurl}/>
        <meta property="og:title" content={props.ogtitle}/>
        <meta property="og:image" content={props.ogimage}/>
        <meta name="twitter:image" content={props.ogimage}/>
        <meta name="twitter:title" content={props.ogtitle}/>
        <meta property="og:description" content={props.ogdescription}/>
        <meta property="og:site_name" content={props.ogsitename}/>
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32"></link>
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="16x16"></link>
        <title>{props.webtitle}</title>
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

Container.defaultProps = {
  webtitle: process.env.projectName,
  ogtype: "website",
  ogurl: process.env.ogurl,
  ogtitle: process.env.ogtitle,
  ogimage: process.env.ogimage,
  ogdescription: process.env.ogdescription,
  ogsitename: process.env.ogsitename,

}