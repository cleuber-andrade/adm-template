interface  EntradaSelectProps  {
  plano?: "Assim" | "Amil" | "Unimed"
  valor: any
  texto: string
  className?: string
  corInput?: boolean
  somenteLeitura?: boolean
  onChange?: (valor: any) => void
}
const EntradaSelect = ({valor, texto, onChange, className, corInput, somenteLeitura, plano}: EntradaSelectProps) => {



  return(
    <div className= {`flex flex-col ${className}`}>
      <label className={`mb-2 text-xl font-bold`}>
        {texto}
      </label>
      <select
        onChange={e => onChange?.(e.target.value)}
        className={`
        border border-gray-400 rounded-lg
        focus:outline-none
        bg-gray-100
        px-4 py-3
        ${somenteLeitura ? "" : "focus:bg-white"}
        ${corInput ? "text-slate-800" : false}
      `}
      >
        <option value={valor}>Selecione o plano</option>
        <option value={valor}>{plano}</option>
        <option value={valor}>{plano}</option>
        <option value={valor}>{plano}</option>
      </select>
    </div>
  )
};
export default EntradaSelect;