import Cliente from "../../model/Cliente";
import { IconeEditar, IconeExcluir } from "../icons";

interface  TabelaProps  {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluidos?: (cliente: Cliente) => void
}
const Tabela = ({clientes, clienteSelecionado, clienteExcluidos}: TabelaProps) => {

  const exibirAcoes = clienteExcluidos || clienteSelecionado

  const renderizarCabecalho = () =>{
    return (
      <tr className="bg-gray-500 sm:text-lg">
        <th className="text-left p-2">Id</th>
        <th className="text-left p-2">Nome</th>
        <th className="text-left p-2">CPF</th>
        <th className="text-left p-2">Email</th>
        <th className="text-left p-2">Nascimento</th>
        <th className="text-left p-2">Telefone</th>
        {exibirAcoes ? <th className="p-2">Ações</th> : false}
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
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      )
    })
  }

  const renderizarAcoes = (cliente: Cliente) => {
    return(
      <td className="flex justify-center">
        {clienteSelecionado ? (
          <button onClick={() => clienteSelecionado?.(cliente)} className={`
            flex
            justify-center items-start
            text-green-600 rounded-full
            p-2 m-1
            hover:bg-gray-600
            hover:bg-opacity-25
            `}>
              {IconeEditar}
              Editar
          </button>
        ): false}
        {clienteExcluidos? (
          <button onClick={() => clienteExcluidos?.(cliente)} className={`
            flex
            justify-center items-center
            text-
            text-red-500 rounded-full
            p-2 m-1
            hover:bg-gray-600
            hover:bg-opacity-25
          `}>
            {IconeExcluir}
            Excluir
        </button>
        ): false}
      </td>
    )
  }

  return(
    <table className="w-full rounded-md absolute md:static overflow-hidden">
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