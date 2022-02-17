import Tabela from "../components/templates/Tabela";
import Cliente from "../model/Cliente";
import Head from "next/head";
import Layout from "../components/templates/Layout";

interface  PesquisaProps  {
  clientes: Cliente[]
}
const Search = ({}: PesquisaProps) => {

  const clientes = [
    new Cliente("", 'Cleuber', "058.038.137-45", "15975345", "Av. Brasil, 15", 28041987, "(21)99710-9964", "Assim", "Clinico", "Ana Katarina")
  ]

  return(
    <>
      <Layout  titulo="Pesquisar Clientes" subtitulo="Pesquisa de Clientes">
        <Head>
            <title>Pesquisar - Drª Ana Katarina</title>
            <meta name="Pagina pesquisar clientes" content="Realizar Pesquisa de clientes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="
          mt-20
          bg-white
          p-6 rounded-md
          bg-opacity-20
          backdrop-filter
          backdrop-blur-lg"
        >
          <Tabela clientes={clientes}/>
        </div>
      </Layout>

    </>

  )
};
export default Search;