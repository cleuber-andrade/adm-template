export default class Cliente {
  #id: string
  #nome: string
  #cpf: string
  #carteira: string
  #endereco: string
  #nascimento: number
  #tel: string
  #plano: string
  #especialidade: string
  #doutor: string

  constructor(id: string = null,nome: string, cpf: string , carteira: string, endereco: string, nascimento: number, tel: string,  plano: string, especialidade: string, doutor: string ){
    this.#id = id
    this.#nome = nome
    this.#cpf = cpf
    this.#carteira = carteira
    this.#endereco = endereco
    this.#nascimento = nascimento
    this.#tel = tel
    this.#plano = plano
    this.#especialidade = especialidade
    this.#doutor = doutor
  }

  static vazio(){
    return new Cliente("", "", "", "", "", 0, "", "", "","")
  }

  get nome(){
    return this.#nome
  }

  get cpf(){
    return this.#cpf
  }

  get carteira(){
    return this.#carteira
  }

  get endereco(){
    return this.#endereco
  }

  get nascimento(){
    return this.#nascimento
  }

  get tel() {
    return this.#tel
  }

  get plano(){
    return this.#plano
  }

  get especialidade(){
    return this.#especialidade
  }

  get doutor(){
    return this.#doutor
  }

  get id(){
    return this.#id
  }

}