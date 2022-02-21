interface  BotaoProps  {
  cor?: "green" | "blue" | "gray"
  className?: string
  children: any
}
const Botao = ({cor ,className, children}: BotaoProps) => {
  const color = cor ?? "gray"

  return(
    <button
      className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
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