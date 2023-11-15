import { Categoria } from "./categoria.model";

export class Campeonato {
    id? : number
    nomeCampeonato?: string;
    categoria?: Categoria;
    descricaoCampeonato?: string;
    ativo?: boolean

    constructor(nomeCampeonato: string, categoria: Categoria, descricaoCampeonato: string, ativo: boolean) {
      this.nomeCampeonato = nomeCampeonato;
      this.descricaoCampeonato = descricaoCampeonato;
      this.categoria = categoria;
      this.ativo = ativo;
    }

    public static clone(campeonato: Campeonato) {
      let _campeonato : Campeonato = new Campeonato (campeonato.nomeCampeonato!, campeonato.categoria!, campeonato.descricaoCampeonato!, campeonato.ativo!);
      _campeonato.id = campeonato.id!;
      return _campeonato;
    }

  }