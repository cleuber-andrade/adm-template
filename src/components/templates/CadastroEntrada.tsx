interface  CadastroEntradaProps  {
  tipo?: "text" | "number" | "date" | "email"
  texto: string
  valor: any
  somenteLeitura?: boolean
  colorInput?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}
const CadastroEntrada = ({texto, tipo, valor, somenteLeitura, valorMudou, className, colorInput}: CadastroEntradaProps) => {


  return(
    <div className={`flex flex-col ${className} `}>
      <label className="mb-2">
        {texto}
      </label>
      <input
        type={tipo ?? "text"}
        value={valor}
        readOnly={somenteLeitura}
        onChange={e => valorMudou?.(e.target.value)}
        className={`
          border border-gray-400 rounded-lg
          focus:outline-none
          bg-gray-100
          px-4 py-2
          ${somenteLeitura ? "" : "focus:bg-white"}
          ${colorInput ? "text-slate-800" : false}
        `}
      />
    </div>
  )
};
export default CadastroEntrada;