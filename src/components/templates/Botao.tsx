interface  BotaoProps  {
  className?: string
  children: any
}
const Botao = ({className, children}: BotaoProps) => {

  return(
    <button
      className={`
        p-2
        nm-concave-gray-50-sm
        active:nm-inset-gray-50-sm
        dark:nm-flat-gray-100-sm
        dark:active:nm-inset-gray-100-sm
        text-white rounded-md
        ${className}
      `}
    >
      {children}
    </button>
  )
};
export default Botao;