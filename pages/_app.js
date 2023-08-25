import "@/styles/globals.css";
import Head from "next/head";

import { FormProvider } from "@/store/FormContext";

export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <Head>
        <title>FM - MultiStep</title>
      </Head>
      <Component {...pageProps} />
    </FormProvider>
  );
}
