export class Categoria {
    id?: number;
    nomeCategoria?: string;
    descricaoCategoria?: string;

    constructor(nomeCategoria: string, descricaoCategoria: string) {
      this.nomeCategoria = nomeCategoria;
      this.descricaoCategoria = descricaoCategoria;
    }

    setId(id: number){
      this.id = id;
    }
  }