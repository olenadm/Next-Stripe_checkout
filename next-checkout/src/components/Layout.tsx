import React from "react";
import Head from "next/head";
import { Lato } from "next/font/google";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function Layout(props: any) {
  return (
    <>
      <Head>
        <title>Payment</title>
        <meta name="description" content="Next Checkout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <main className={lato.className}>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}
