import Tabela from "../components/templates/Tabela";
import Cliente from "../model/Cliente";
import Head from "next/head";
import Layout from "../components/templates/Layout";

interface  PesquisaProps  {
  clientes: Cliente[]
}
const Search = ({}: PesquisaProps) => {

  const clientes = [
    new Cliente(1, 'Cleuber', "000.000.000-00", "15975345", "Av. Brasil, 15", "15/17/1999", "(21)33333333", "Assim", "Clinico", "Ana Katarina", "cleuber_test@test.com"),
    new Cliente(2, 'Nathy', "2121212", "15975345", "Av. Brasil, 17", "30/02/1937", "(21)99333554", "cmoam", "Clinico", "Luciana", "nathy.test@test.com"),
  ]

  const clienteSelecionado = (cliente: Cliente) => {
    console.log(cliente.nome)
  }

  const clienteExcluido = (cliente: Cliente) => {
    console.log(`${cliente.nome} foi excluido`)
  }

  return(
    <>
      <Layout  titulo="Pesquisar Clientes" subtitulo="Pesquisa de Clientes">
        <Head>
            <title>Pesquisar - Drª Ana Katarina</title>
            <meta name="Pagina pesquisar clientes" content="Realizar Pesquisa de clientes" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="
          relative
          dark:bg-white
          p-6 rounded-md
          dark:bg-opacity-20
          dark:backdrop-filter
          dark:backdrop-blur-sm
          overflow-auto"
        >
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluidos={clienteExcluido}
          />
        </div>
      </Layout>

    </>

  )
};
export default Search;