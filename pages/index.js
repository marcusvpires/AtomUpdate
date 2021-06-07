import React from "react";
import Head from 'next/head'

import Layout from "../components/Layout";
import Atom from "../components/Atom";
import Main from "../components/Main";
import Header from "../components/Header";
import Result from "../components/Result";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Átomo</title>
        <meta name="title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta name="description" content="Distribuição de Linus Pauling com ilustração gráfica do átomo. Similar a uma tabela periódica interativa, apresenta as camadas de energia de forma gráfica com os respectivos átomos . Além de apresentar o nome, simulo e número atômico"/>
        <link rel="icon" href="/atom.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://atomo.vercel.app/"/>
        <meta property="og:title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta property="og:description" content="Distribuição de Linus Pauling com ilustração gráfica do átomo. Similar a uma tabela periódica interativa, apresenta as camadas de energia de forma gráfica com os respectivos átomos . Além de apresentar o nome, simulo e número atômico"/>
        <meta property="og:image" content="https://atomo.vercel.app/banner.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://atomo.vercel.app/"/>
        <meta property="twitter:title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta property="twitter:description" content="Distribuição de Linus Pauling com ilustração gráfica do átomo. Similar a uma tabela periódica interativa, apresenta as camadas de energia de forma gráfica com os respectivos átomos . Além de apresentar o nome, simulo e número atômico"/>
        <meta property="twitter:image" content="https://atomo.vercel.app/banner.png"/>
      </Head>
      <Atom />
      <Main >
        <Header />
        <Result />
        <Footer />
      </Main>
    </Layout>
  )
}
