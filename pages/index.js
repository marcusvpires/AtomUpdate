import React from "react";
import ReactGA from 'react-ga';
import Head from 'next/head'

import Layout from "../components/Layout";
import Atom from "../components/Atom";
import Main from "../components/Main";
import Header from "../components/Header";
import Properties from "../components/Properties";
import Footer from "../components/Footer";

export default function Home() {

  const [atom, setAtom] = React.useState({
    atomic: "1",
    symbol: "H",
    weight: "1.008",
    electronstring: "1s1",
    series: "Nonmetal",
    melt: "14.01",
    boil: "20.28",
    electroneg: "2.20",
    valence: "1",
    oxidation: "-1c,1c",
    radius: {
      calculated: "53",
      empirical: "25",
      covalent: "37",
      vanderwaals: "120",
    },
    discover: "1766",
    density: { stp: "0.0899" },
    affinity: "72.8",
    conductivity: { thermal: "0.1805" },
    abundance: {
      universe: "75",
      solar: "75",
      meteor: "2.4",
      crust: "0.15",
      ocean: "11",
      human: "10",
    },
    heat: { specific: "14300", vaporization: "0.452", fusion: "0.558" },
    ionize: { 1: "1312.0" },
    expandedconfig: "1s1",
    electrons: [1],
    quantum: { l: 0, m: 0, n: 1 },
    isotopes: 7,
    name: "Hidrogênio",
  });

  React.useEffect(() => {
    ReactGA.initialize('UA-196455787-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
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
      <Atom layers={atom.electrons} />
      <Main >
        <Header setAtom={setAtom}/>
        <Properties atom={atom} />
        <Footer />
      </Main>
    </Layout>
  )
}

