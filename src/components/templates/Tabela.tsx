import Cliente from "../../model/Cliente";

interface  TabelaProps  {
  clientes: Cliente[]
}
const Tabela = ({clientes}: TabelaProps) => {

  const renderizarCabecalho = () =>{
    return (
      <tr className="bg-gray-500 sm:text-lg">
        <th className="text-left p-2">Id</th>
        <th className="text-left p-2">Nome</th>
        <th className="text-left p-2">CPF</th>
        <th className="text-left p-2">Email</th>
        <th className="text-left p-2">Nascimento</th>
        <th className="text-left p-2">Telefone</th>
      </tr>
    )
  }

  const renderizarDados = () =>{
    return clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={` ${i % 2 === 0 ? "bg-white bg-opacity-40" : "bg-white bg-opacity-20"} text-sm`}>
          <td className="text-left p-3">{cliente.id}</td>
          <td className="text-left p-3">{cliente.nome}</td>
          <td className="text-left p-3">{cliente.cpf}</td>
          <td className="text-left p-3">{cliente.email}</td>
          <td className="text-left p-3">{cliente.nascimento}</td>
          <td className="text-left p-3">{cliente.tel}</td>
        </tr>
      )
    })
  }

  return(
    <table className="w-full rounded-md md:overflow-hidden">
      <thead className="text-sm">
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
};

export default Tabela;