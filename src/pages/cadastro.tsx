import Layout from "../components/templates/Layout";

interface  CadastroProps  {

}
const Cadastro = ({}: CadastroProps) => {
  return(
    <div>
      <Layout titulo="Cadastro" subtitulo="Aqui é o cadastramento">
        <h2>Cadastro</h2>
      </Layout>
    </div>
  )
};
export default Cadastro;