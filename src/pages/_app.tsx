import "src/styles/globals.css";
import { AppProps } from "next/app";
import { Head } from "next/document";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgColor } from "../hooks/useBgColor";

const App = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} foo={123} />
    </>
  );
};

export default App;
