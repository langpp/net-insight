import React from "react";
import Head from "next/head";
import favicon from "../../../public/favicon.png";

const Seo = ({ title }: any) => {
  let i = `NetInsight - ${title}`;

  return (
    <Head>
      <title>{i}</title>
      <link href={favicon.src} rel="icon"></link>
      <meta name="description" content={i} />
      <meta name="author" content="Team Inhouse" />
      <meta name="keywords" content="netinsight, agata, telkomsel"></meta>
    </Head>
  );
};

export default Seo;