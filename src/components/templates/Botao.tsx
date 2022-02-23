interface  BotaoProps  {
  className?: string
  children: any
}
const Botao = ({className, children}: BotaoProps) => {

  return(
    <button
      className={`
      nm-flat-gray-100-sm active:nm-inset-gray-100-sm
      text-white rounded-md
      ${className}
      `}
    >
      {children}
    </button>
  )
};
export default Botao;