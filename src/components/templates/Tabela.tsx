import Cliente from "../../model/Cliente";

interface  TabelaProps  {
  clientes: Cliente[]
}
const Tabela = ({clientes}: TabelaProps) => {
  return(
    <table>
      <tr>
        <th>Nome</th>
        <th>Cpf</th>
        <th>Carteira</th>
        <th>Endereco</th>
        <th>Eascimento</th>
        <th>tel</th>
        <th>plano</th>
        <th>especialidade</th>
        <th>doutor</th>
        <th></th>
      </tr>
    </table>
  )
};
export default Tabela;