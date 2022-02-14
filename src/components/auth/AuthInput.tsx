interface AuthInputProps {
  label: string
  valor: any
  obrigatorio?: boolean
  naoRenderizarQuando?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou: (novoValor: any) => void
}

export default function AuthInput({naoRenderizarQuando, label, tipo, valor, valorMudou, obrigatorio}: AuthInputProps) {
  return naoRenderizarQuando ? null : (
      <div className="flex flex-col mt-4">
          <label>{label}</label>
          <input
              type={tipo ?? 'text'}
              value={valor}
              onChange={e => valorMudou?.(e.target.value)}
              required={obrigatorio}
              className={`
                  px-4 py-3 rounded-lg bg-gray-200 mt-2
                  border focus:border-blue-500 focus:bg-white
                  focus:outline-none
              `}
          />
      </div>
  )
}