interface  CadastramentoProps  {
  className?: string
  children: any
}
const Cadastramento = ({children, className}: CadastramentoProps) => {
  return(
    <div className={`${className}`}>
      {children}
    </div>
  )
};
export default Cadastramento;