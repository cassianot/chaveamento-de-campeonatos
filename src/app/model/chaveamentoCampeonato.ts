import { Campeonato } from "./campeonato.model";
import { Categoria } from "./categoria.model";

export class ChaveamentoCampeonato <T>{
    Campeonato: Campeonato = new Campeonato("", new Categoria("", "", true), "", true);
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

    setVencedorGrupoA(competidor : T) {
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
}