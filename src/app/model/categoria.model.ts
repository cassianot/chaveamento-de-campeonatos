export class Categoria {
    id? : number
    nomeCategoria?: string;
    descricaoCategoria?: string;
    ativo?: boolean

    constructor(nomeCategoria: string, descricaoCategoria: string, ativo: boolean) {
      this.nomeCategoria = nomeCategoria;
      this.descricaoCategoria = descricaoCategoria;
      this.ativo = ativo;
    }

  }