export class Time {
    id? : number
    nomeTime?: string;
    descricaoTime?: string;
    ativo?: boolean

    constructor(nomeTime: string, descricaoTime: string, ativo: boolean) {
      this.nomeTime = nomeTime;
      this.descricaoTime = descricaoTime;
      this.ativo = ativo;
    }

    public static clone(time: Time) {
      let _time : Time = new Time (time.nomeTime!, time.descricaoTime!, time.ativo!);
      _time.id = time.id!;
      return _time;
    }

  }