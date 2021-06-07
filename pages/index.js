import React from "react";
import Head from 'next/head'

import Layout from "../components/Layout";
import Atom from "../components/Atom";
import Main from "../components/Main";
import Header from "../components/Header";
import Properties from "../components/Properties";
import Footer from "../components/Footer";

export default function Home() {

  const [atom, setAtom] = React.useState(  {
    atomic: "3",
    symbol: "Li",
    weight: "6.94",
    electronstring: "[He] 2s1",
    series: "Alkali",
    melt: "453.69",
    boil: "1615.",
    electroneg: "0.98",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "167",
      empirical: "145",
      covalent: "134",
      vanderwaals: "182",
    },
    discover: "1817",
    density: { stp: "535.", liquid: "512." },
    hardness: { mohs: "0.6" },
    modulus: { bulk: "11", shear: "4.2", young: "4.9" },
    affinity: "59.6",
    conductivity: { thermal: "85", electric: "11" },
    abundance: {
      universe: "6.0e-7",
      solar: "6.0e-9",
      meteor: "0.00017",
      crust: "0.0017",
      ocean: "0.000018",
      human: "3.0e-6",
    },
    heat: { specific: "3570", vaporization: "147", fusion: "3.0" },
    ionize: { 1: "520.2", 2: "7298.1", 3: "11815.0" },
    expandedconfig: "1s2 2s1",
    electrons: [2, 1],
    quantum: { l: 0, m: 0, n: 2 },
    isotopes: 10,
    name: "Lítio",
  });
  
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
        <Properties atom={atom} />
        <Footer />
      </Main>
    </Layout>
  )
}
