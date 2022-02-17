import Layout from '../components/templates/Layout'
import Head from 'next/head'

export default function Perfil() {
  return (
    <>
      <Head>
          <title>Perfil</title>
          <meta name="Perfil" content="Informações sobre o perfil do usuário" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout titulo="Perfil do Usuário"
    subtitulo="Administre as suas informações de usuário!">
        <h1>Perfil do Usuário</h1>
    </Layout>
    </>

  )
}
