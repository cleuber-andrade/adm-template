import Layout from "../components/templates/Layout";
import Head from 'next/head';
import Cadastramento from "../components/templates/Cadastramento"
import Cliente from "../model/Cliente"



interface  CadastroProps  {
  
}
const Cadastro = ({}: CadastroProps) => {

  const clientes = [
    new Cliente(1, 'Cleuber', "000.000.000-00", "15975345", "Av. Brasil, 15", "15/17/1999", "(21)33333333", "Assim", "Clinico", "Ana Katarina", "cleuber_test@test.com"),
    new Cliente(2, 'Nathy', "2121212", "15975345", "Av. Brasil, 17", "30/02/1937", "(21)99333554", "cmoam", "Clinico", "Luciana", "nathy.test@test.com"),
  ]

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
          <Cadastramento cliente={clientes[0]}/>
      </div>
      </Layout>
    </div>
  )
};

export default Cadastro;