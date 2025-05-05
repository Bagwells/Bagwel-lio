import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import Preloader from "@/components/preloader"
import NavBar from "@/components/navBar";



export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <CSSReset />
      <Preloader/>
      <NavBar/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
  
}
