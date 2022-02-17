import Tabela from "../components/templates/Tabela";
import Cliente from "../model/Cliente";
import Head from "next/head";
import Layout from "../components/templates/Layout";

interface  PesquisaProps  {
  clientes: Cliente[]
}
const Search = ({}: PesquisaProps) => {

  const clientes = [
    new Cliente(1, 'Cleuber', "000.000.000-00", "15975345", "Av. Brasil, 15", 28041987, "(21)33333333", "Assim", "Clinico", "Ana Katarina"),
    new Cliente(2, 'Nathy', "2121212", "15975345", "Av. Brasil, 17", 123456789, "(21)99333554", "cmoam", "Clinico", "Luciana")
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