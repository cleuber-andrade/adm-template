import Layout from '../components/templates/Layout';
import Head from 'next/head';

export default function Ajustes() {
  return (
    <>
      <Head>
          <title>Ajustes - Drª Ana Katarina</title>
          <meta name="Pagina Ajustes" content="configurações do app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout titulo="Ajustes"
        subtitulo="Personalize o sistema por aqui!">
        <h3>Conteúdo!!!!</h3>
      </Layout>
    </>

  )
}
