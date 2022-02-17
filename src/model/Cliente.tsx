export default class Cliente {
  #id: string
  #nome: string
  #cpf: number
  #carteira: string
  #endereco: string
  #nascimento: number
  #tel: string
  #plano: string
  #especialidade: string
  #doutor: string

  constructor(nome: string, cpf: number, carteira: string, endereco: string, nascimento: number, tel: string,  plano: string, especialidade: string, doutor: string, id: string = null){
    this.#nome = nome
    this.#cpf = cpf
    this.#carteira = carteira
    this.#endereco = endereco
    this.#nascimento = nascimento
    this.#tel = tel
    this.#plano = plano
    this.#especialidade = especialidade
    this.#doutor = doutor
    this.#id = id
  }

  get id(){
    return this.#id
  }

  
}