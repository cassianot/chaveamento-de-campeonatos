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

    public static clone(categoria: Categoria) {
      let _categoria : Categoria = new Categoria (categoria.nomeCategoria!, categoria.descricaoCategoria!, categoria.ativo!);
      _categoria.id = categoria.id!;
      return _categoria;
    }

  }