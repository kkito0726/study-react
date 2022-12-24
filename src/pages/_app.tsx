import "src/styles/globals.css";
import { AppProps } from "next/app";
import { Head } from "next/document";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightblue } from "../hooks/useBgLightblue";

export default function App({ Component, pageProps }: AppProps) {
  const count = useCounter();
  const inputArray = useInputArray();
  useBgLightblue();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...count} {...inputArray} foo={123} />
    </>
  );
}
