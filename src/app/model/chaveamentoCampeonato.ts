import { Campeonato } from "./campeonato.model";
import { Categoria } from "./categoria.model";

export class ChaveamentoCampeonato <T>{
    id?:number;
    Campeonato: Campeonato = new Campeonato("", new Categoria("", "", true), "", true);
    TipoCompetidor: string = ""
    GrupoA: T[] = [];
    GrupoB: T[] = [];
    GrupoC: T[] = [];
    GrupoD: T[] = [];
    GrupoE: T[] = [];
    GrupoF: T[] = [];
    GrupoG: T[] = [];
    GrupoH: T[] = [];
    GrupoI: T[] = [];
    GrupoJ: T[] = [];
    GrupoK: T[] = [];
    GrupoL: T[] = [];
    GrupoM: T[] = [];
    GrupoN: T[] = [];
    DisputaTerceiroLugar: T[] = [];
    DisputaFinal: T[] = [];
    Campeao! : T;
    SegundoLugar! : T;
    TerceiroLugar! : T;
    iniciado: boolean = false;

    public setVencedorGrupoA(competidor : T) : void {
        this.GrupoI.push(competidor);
    }

    setVencedorGrupoB(competidor : T) {
        this.GrupoI.push(competidor);
    }

    setVencedorGrupoC(competidor : T) {
        this.GrupoJ.push(competidor);
    }

    setVencedorGrupoD(competidor : T) {
        this.GrupoJ.push(competidor);
    }

    setVencedorGrupoE(competidor : T) {
        this.GrupoK.push(competidor);
    }

    setVencedorGrupoF(competidor : T) {
        this.GrupoK.push(competidor);
    }

    setVencedorGrupoG(competidor : T) {
        this.GrupoL.push(competidor);
    }

    setVencedorGrupoH(competidor : T) {
        this.GrupoL.push(competidor);
    }

    setVencedorGrupoI(competidor : T) {
        this.GrupoM.push(competidor);
    }

    setVencedorGrupoJ(competidor : T) {
        this.GrupoM.push(competidor);
    }

    setVencedorGrupoK(competidor : T) {
        this.GrupoN.push(competidor);
    }

    setVencedorGrupoL(competidor : T) {
        this.GrupoN.push(competidor);
    }

    setDisputaTerceiroLugar(competidor : T) {
        this.DisputaTerceiroLugar.push(competidor);
    }

    setFinal(competidor : T) {
        this.DisputaFinal.push(competidor);
    }

    setCampeao(competidor: T){
        this.Campeao = competidor;
    }

    setSegundoLugar(competidor: T){
        this.SegundoLugar = competidor;
    }

    setTerceiroLugar(competidor: T){
        this.SegundoLugar = competidor;
    }

    public static clone(chaveamento: ChaveamentoCampeonato<any>) {
        let _chaveamento : ChaveamentoCampeonato<any> = new ChaveamentoCampeonato ();
        _chaveamento.id = chaveamento.id;
        _chaveamento.Campeonato = chaveamento.Campeonato;
        _chaveamento.TipoCompetidor = chaveamento.TipoCompetidor;
        _chaveamento.GrupoA = chaveamento.GrupoA;
        _chaveamento.GrupoB = chaveamento.GrupoB;
        _chaveamento.GrupoC = chaveamento.GrupoC;
        _chaveamento.GrupoD = chaveamento.GrupoD;
        _chaveamento.GrupoE = chaveamento.GrupoE;
        _chaveamento.GrupoF = chaveamento.GrupoF;
        _chaveamento.GrupoG = chaveamento.GrupoG;
        _chaveamento.GrupoH = chaveamento.GrupoH;
        _chaveamento.GrupoI = chaveamento.GrupoI;
        _chaveamento.GrupoJ = chaveamento.GrupoJ;
        _chaveamento.GrupoK = chaveamento.GrupoK;
        _chaveamento.GrupoL = chaveamento.GrupoL;
        _chaveamento.GrupoM = chaveamento.GrupoM;
        _chaveamento.GrupoN = chaveamento.GrupoN;
        _chaveamento.DisputaTerceiroLugar = chaveamento.DisputaTerceiroLugar;
        _chaveamento.DisputaFinal = chaveamento.DisputaFinal;
        _chaveamento.Campeao = chaveamento.Campeao;
        _chaveamento.SegundoLugar = chaveamento.SegundoLugar;
        _chaveamento.TerceiroLugar = chaveamento.TerceiroLugar;
        _chaveamento.iniciado = chaveamento.iniciado;
        return _chaveamento;
    }
}