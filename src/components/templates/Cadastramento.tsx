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
  const [nascimento, setNascimento] = useState(cliente?.nascimento?? "")

  return(
    <>
      <div className="flex flex-wrap justify-center space-x-8">
        {id ? (
          <CadastroEntrada
            somenteLeitura
            colorInput
            texto="Id"
            valor={id}
            className="mb-4 w-24"
          />
        ) : false}
        <CadastroEntrada
          texto="Nome"
          colorInput
          valor={nome}
          valorMudou={setNome}
          className="mb-4 w-1/3 colorInput"
        />
        <CadastroEntrada
          texto="CPF"
          colorInput
          tipo="number"
          valor={cpf}
          valorMudou={setCpf}
        />
        <CadastroEntrada
          texto="Nascimento"
          colorInput
          tipo="date"
          valor={nascimento}
          valorMudou={setNascimento}
        />
      </div>
      <div className="flex flex-row justify-end mt-7 rounded-md">
        <Botao className={"mr-2"}>
          Salvar
        </Botao>
        <Botao >
          Cancelar
        </Botao>
      </div>
    </>

  )
};
export default Cadastramento;