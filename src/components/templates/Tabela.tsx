import Cliente from "../../model/Cliente";

interface  TabelaProps  {
  clientes: Cliente[]
}
const Tabela = ({clientes}: TabelaProps) => {

  const renderizarCabecalho = () =>{
    return (
      <tr>
        <th>Nome</th>
        <th>Cpf</th>
        <th>Carteira</th>
        <th>Endereco</th>
        <th>Nascimento</th>
        <th>tel</th>
        <th>plano</th>
        <th>especialidade</th>
        <th>doutor</th>
      </tr>
    )
  }

  const renderizarDados = () =>{
    return clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{cliente.cpf}</td>
          <td>{cliente.carteira}</td>
          <td>{cliente.endereco}</td>
          <td>{cliente.nascimento}</td>
          <td>{cliente.tel}</td>
          <td>{cliente.plano}</td>
          <td>{cliente.especialidade}</td>
          <td>{cliente.doutor}</td>
        </tr>
      )
    })
  }

  return(
    <table>
      <thead>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
};
export default Tabela;