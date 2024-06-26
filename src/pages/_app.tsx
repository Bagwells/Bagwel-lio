import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
  
}
