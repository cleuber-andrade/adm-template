interface  CadastroEntradaProps  {
  tipo?: "text" | "number"
  texto: string
  valor: any
  somenteLeitura?: boolean
}
const CadastroEntrada = ({texto, tipo, valor, somenteLeitura }: CadastroEntradaProps) => {
  return(
    <div className="flex flex-col">
      <label className="mb-4">
        {texto}
      </label>
      <input
        type={tipo ?? "text"}
        value={valor}
        readOnly={somenteLeitura}
        className={`
          border border-gray-400 rounded-lg
          focus:outline-none
          bg-gray-100
          px-4 py-2
          ${somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  )
};
export default CadastroEntrada;