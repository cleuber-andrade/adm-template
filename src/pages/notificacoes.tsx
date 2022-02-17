import Layout from '../components/templates/Layout'
import Head from 'next/head'

export default function Notificacoes() {
  return (
    <>
      <Head>
          <title>Notificações - Drª Ana Katarina</title>
          <meta name="Pagina Noticações" content="Pagina para alerta para usuários" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout titulo="Notificações"
        subtitulo="Aqui você irá gerenciar as suas notificações!">
          <h1>Notificações</h1>
      </Layout>
    </>

  )
}