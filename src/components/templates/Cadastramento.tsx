import { useState } from "react";
import Cliente from "../../model/Cliente";
import CadastroEntrada from "../templates/CadastroEntrada"
import Botao from "../templates/Botao";

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
          className="mb-4"
        />
      ) : false}
      <CadastroEntrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <CadastroEntrada
        texto="CPF"
        tipo="number"
        valor={cpf}
        valorMudou={setCpf}
      />
      <div className="flex justify-end mt-7">
        <Botao className={"mr-2"}>
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao>
          Cancelar
        </Botao>
      </div>
    </div>
  )
};
export default Cadastramento;