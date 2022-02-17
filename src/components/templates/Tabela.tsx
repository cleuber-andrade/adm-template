import Cliente from "../../model/Cliente";

interface  TabelaProps  {
  clientes: Cliente[]
}
const Tabela = ({clientes}: TabelaProps) => {

  const renderizarCabecalho = () =>{
    return (
      <tr className="bg-gray-500">
        <th className="p-3">Id</th>
        <th className="p-3">Nome</th>
        <th className="p-3">CPF</th>
        <th className="p-3">Carteira</th>
        <th className="p-3">Endereco</th>
        <th className="p-3">Nascimento</th>
        <th className="p-3">Telefone</th>
        <th className="p-3">Plano</th>
        <th className="p-3">Especialidade</th>
        <th className="p-3">Doutor</th>
      </tr>
    )
  }

  const renderizarDados = () =>{
    return clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={` ${i % 2 === 0 ? "bg-white bg-opacity-40" : "bg-white bg-opacity-20"}`}>
          <td className="text-center p-3">{cliente.id}</td>
          <td className="text-center p-3">{cliente.nome}</td>
          <td className="text-center p-3">{cliente.cpf}</td>
          <td className="text-center p-3">{cliente.carteira}</td>
          <td className="text-center p-3">{cliente.endereco}</td>
          <td className="text-center p-3">{cliente.nascimento}</td>
          <td className="text-center p-3">{cliente.tel}</td>
          <td className="text-center p-3">{cliente.plano}</td>
          <td className="text-center p-3">{cliente.especialidade}</td>
          <td className="text-center p-3">{cliente.doutor}</td>
        </tr>
      )
    })
  }

  return(
    <table className="w-full rounded-md overflow-hidden">
      <thead className="text-xl">
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
};

export default Tabela;