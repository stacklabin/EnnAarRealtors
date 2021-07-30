import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import '../styles/navbar.css'
// import 'tailwindcss/tailwind.css'
import FacebookPixel from  '../src/components/FacebookPixel'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import {ChakraProvider} from '@chakra-ui/react'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brandDeepBlue: {
    500: "#0383bd",
  },
  brandLightBlue: {
    500: "#0ec6d5",
  },
  brandGray: {
    500: "#61666e",
  },
  brandBlack: {
    500: "#060e1a",
  },
}
const theme = extendTheme({ colors })

//Binding events. 
//Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

const TopProgressBar = dynamic(
  () => {
    return import("../src/components/TopProgressBar");
  },
  { ssr: false },
);

export default function App ({ Component, pageProps }) {
  return (
   
    <Provider session={pageProps.session}>
      <FacebookPixel>
      <ChakraProvider theme={theme}>     
      <TopProgressBar /> 
        <Component {...pageProps} />
      </ChakraProvider>
      </FacebookPixel>
    </Provider>
  )
}