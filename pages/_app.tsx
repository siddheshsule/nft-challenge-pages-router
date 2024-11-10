import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {Rinkeby} from '@thirdweb-dev/chains'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Rinkeby}clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
