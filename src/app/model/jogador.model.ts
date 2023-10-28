export class Jogador {
    id? : number
    nomeJogador?: string;
    dataNascimento?: string;
    cidade?: string;
    telefone?: string;
    ativo?: boolean

    constructor(nomeJogador: string, dataNascimento: string, cidade: string, telefone: string, ativo: boolean) {
      this.nomeJogador = nomeJogador;
      this.dataNascimento = dataNascimento;
      this.cidade = cidade;
      this.telefone = telefone;
      this.ativo = ativo;
    }

    public static clone(jogador: Jogador) {
      let _jogador : Jogador = new Jogador (jogador.nomeJogador!, jogador.dataNascimento!, jogador.cidade!, jogador.telefone!, jogador.ativo!);
      _jogador.id = jogador.id!;
      return _jogador;
    }

  }