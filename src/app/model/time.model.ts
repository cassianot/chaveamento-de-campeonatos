import { Competidor } from "./competidor.model";

export class Time extends Competidor{
    descricaoTime?: string;
    ativo?: boolean

    constructor(nomeCompetidor: string, descricaoTime: string, ativo: boolean) {
      super(nomeCompetidor);
      this.descricaoTime = descricaoTime;
      this.ativo = ativo;
    }

    public static clone(time: Time) {
      let _time : Time = new Time (time.nomeCompetidor!, time.descricaoTime!, time.ativo!);
      _time.id = time.id!;
      return _time;
    }
  }