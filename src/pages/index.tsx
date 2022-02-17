import Layout from '../components/templates/Layout'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
          <title>Home</title>
          <meta name="Pagina Home" content="Informações gerais sobre estatisticas do app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template Admin!">
        <h3>Conteúdo!!!!</h3>
      </Layout>
    </>
  )
}