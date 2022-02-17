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
        <div className="
          mt-20
          bg-white
          p-5 rounded-md
          bg-opacity-20
          backdrop-filter
          backdrop-blur-lg"
        >

        </div>
      </Layout>
    </div>
  )
};
export default Cadastro;