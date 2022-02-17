import Cliente from "../../model/Cliente";

interface  TabelaProps  {
  clientes: Cliente[]
}
const Tabela = ({clientes}: TabelaProps) => {

  const renderizarCabecalho = () =>{
    return (
      <tr>
        <th className="pb-5">Id</th>
        <th className="pb-5">Nome</th>
        <th className="pb-5">CPF</th>
        <th className="pb-5">Carteira</th>
        <th className="pb-5">Endereco</th>
        <th className="pb-5">Nascimento</th>
        <th className="pb-5">Telefone</th>
        <th className="pb-5">Plano</th>
        <th className="pb-5">Especialidade</th>
        <th className="pb-5">Doutor</th>
      </tr>
    )
  }

  const renderizarDados = () =>{
    return clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={` ${i % 2 === 0 ? "bg-white bg-opacity-40" : "bg-white bg-opacity-20"}`}>
          <td className=" p-4">{cliente.id}</td>
          <td className=" p-4">{cliente.nome}</td>
          <td className=" p-4">{cliente.cpf}</td>
          <td className=" p-4">{cliente.carteira}</td>
          <td className=" p-4">{cliente.endereco}</td>
          <td className=" p-4">{cliente.nascimento}</td>
          <td className=" p-4">{cliente.tel}</td>
          <td className=" p-4">{cliente.plano}</td>
          <td className=" p-4">{cliente.especialidade}</td>
          <td className=" p-4">{cliente.doutor}</td>
        </tr>
      )
    })
  }

  return(
    <table className="w-full">
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