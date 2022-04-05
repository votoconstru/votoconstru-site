import Head from 'next/head'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Destaques from '../components/Destaques'
import Footer from '../components/Footer'
import Departamentos from '../components/Departamentos'
import Sobre from '../components/Sobre'

export default function Home() {
  return (
    <div className="min-h-full">
      <Head>
        <title>Votoconstru Materiais para Construção | Loja em Votorantim</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main>
        <Header />
        <Destaques /> 
        <Departamentos />     
        <Sobre />          
      </main>
      <Footer />
    </div>
  )
}
