import { Competidor } from "./competidor.model";

export class Jogador extends Competidor{
    dataNascimento?: string;
    cidade?: string;
    telefone?: string;
    ativo?: boolean

    constructor(nomeCompetidor: string, dataNascimento: string, cidade: string, telefone: string, ativo: boolean) {
      super(nomeCompetidor);
      this.dataNascimento = dataNascimento;
      this.cidade = cidade;
      this.telefone = telefone;
      this.ativo = ativo;
    }

    public static clone(jogador: Jogador) {
      let _jogador : Jogador = new Jogador (jogador.nomeCompetidor!, jogador.dataNascimento!, jogador.cidade!, jogador.telefone!, jogador.ativo!);
      _jogador.id = jogador.id!;
      return _jogador;
    }

  }