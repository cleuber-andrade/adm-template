import Layout from "../components/templates/Layout"
import Head from 'next/head'

interface  AgendamentoProps  {

}
const Agendamento = ({}: AgendamentoProps) => {
  return(
    <div>
      <Head>
          <title>Agendamento</title>
          <meta name="Pagina Agendamento" content="pagina de agendamento" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout titulo="Agendamentos"
      subtitulo="Página de Agendamento">
        <h2>Agenda disponível</h2>
      </Layout>
    </div>
  )
};
export default Agendamento;