import Layout from "../components/templates/Layout";
import Head from 'next/head';


interface  CadastroProps  {

}
const Cadastro = ({}: CadastroProps) => {
  return(
    <div>
      <Head>
          <title>Cadastro - Drª Ana Katarina</title>
          <meta name="Pagina Cadastro" content="Cadastramento de Clientes" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout titulo="Cadastro" subtitulo="Cadastramento de Clientes">
      </Layout>
    </div>
  )
};

export default Cadastro;