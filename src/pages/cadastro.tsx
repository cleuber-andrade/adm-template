import Layout from "../components/templates/Layout";
import Head from 'next/head';
import Cadastramento from "../components/templates/Cadastramento"


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
      <Layout titulo="Cadastro" subtitulo="Cadastramento de Clientes"
      >
      <div className="dark:bg-white
          p-6 rounded-md
          dark:bg-opacity-20
          dark:backdrop-filter
          dark:backdrop-blur-sm>
          Cadastro Cliente">
          <Cadastramento />
      </div>
      </Layout>
    </div>
  )
};

export default Cadastro;