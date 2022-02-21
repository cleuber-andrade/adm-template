interface  BotaoProps  {
  color?: "green" | "red" | "gray"
  className?: string
  children: any
}
const Botao = ({color ,className, children}: BotaoProps) => {
  const cor = color ?? "gray"

  return(
    <button
      className={`
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-white rounded-md
      px-4 py-2
      ${className}
      `}
    >
      {children}
    </button>
  )
};
export default Botao;