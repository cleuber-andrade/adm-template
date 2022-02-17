import Layout from "../components/templates/Layout"

interface  AgendamentoProps  {

}
const Agendamento = ({}: AgendamentoProps) => {
  return(
    <div>
      <Layout titulo="Agendamentos"
      subtitulo="Página de Agendamento">
        <h2>Agenda disponível</h2>
      </Layout>
    </div>
  )
};
export default Agendamento;