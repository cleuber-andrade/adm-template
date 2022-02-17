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

  constructor(id: string = null, nome: string, cpf: number, carteira: string, endereco: string, nascimento: number, tel: string,  plano: string, especialidade: string, doutor: string){
    this.#nome = nome

  }
}