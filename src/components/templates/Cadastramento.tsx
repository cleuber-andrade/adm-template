import { useState } from "react";
import Cliente from "../../model/Cliente";
import CadastroEntrada from "../templates/CadastroEntrada"

interface  CadastramentoProps  {
  cliente: Cliente
}
const Cadastramento = ({cliente}: CadastramentoProps) => {
  const id = cliente?.id
  const [nome, setNome] = useState(cliente?.nome?? "")
  const [cpf, setCpf] = useState(cliente?.cpf?? 0)

  return(
    <div className="flex flex-col md:flex-row">
      {id ? (
        <CadastroEntrada
          somenteLeitura
          texto="Id"
          valor={id}
        />
      ) : false}
      <CadastroEntrada
        texto="Nome"
        valor={nome}
      />
      <CadastroEntrada
        texto="CPF"
        tipo="number"
        valor={cpf}
      />
    </div>
  )
};
export default Cadastramento;