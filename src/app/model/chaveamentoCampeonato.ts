import { Util } from "../util/util";
import { Campeonato } from "./campeonato.model";
import { Categoria } from "./categoria.model";

export class ChaveamentoCampeonato{
    id?:number;
    Campeonato: Campeonato = new Campeonato("", new Categoria("", "", true), "", true);
    TipoCompetidor: string = ""
    GrupoA: any[] = [];
    GrupoB: any[] = [];
    GrupoC: any[] = [];
    GrupoD: any[] = [];
    GrupoE: any[] = [];
    GrupoF: any[] = [];
    GrupoG: any[] = [];
    GrupoH: any[] = [];
    GrupoI: any[] = [];
    GrupoJ: any[] = [];
    GrupoK: any[] = [];
    GrupoL: any[] = [];
    GrupoM: any[] = [];
    GrupoN: any[] = [];
    Grupos: any[] = [];
    DisputaTerceiroLugar: any[] = [];
    DisputaFinal: any[] = [];
    Campeao! : any;
    SegundoLugar! : any;
    TerceiroLugar! : any;
    iniciado: boolean = false;

    constructor(){
        const nomes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'TerceiroLugar', 'Final'];
        let array : any[];
        nomes.forEach((nome)=>{
            array = [];
            array.push('Grupo'+nome);
            array.push([]);
            this.Grupos.push(array);
        })
    }

    public setChaveamento(lista : any[]){
        this.Grupos.forEach((grupo)=>{
            lista.forEach((competidor)=>{
                if(grupo[1].length < 2){
                    if(!this.competidorJaEstaEmGrupo(competidor)){
                        grupo[1].push(competidor);
                    }
                }
            });
        });
    }

    competidorJaEstaEmGrupo(competidor: any) : boolean {
        var retorno = false;
        this.Grupos.forEach((grupo)=>{
            var i = grupo[1].find(((obj: { id: any; })=>{
                return obj.id == competidor.id
            }));
            if(i !== undefined)
                retorno = true;
        });
        return retorno;
    }

    checaDuplicidade(array: any[], competidor: any){
        var retorno = false;
        array.find((obj=>{
            if (obj.id == competidor.id) retorno = true
        }));
        return retorno;
    }

    setVencedor(nomeGrupo: string, competidor : any){
        switch(nomeGrupo){
            case 'GrupoA':
            case 'GrupoB':
                if(this.getArrayGrupo('GrupoI')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoI')[1], competidor)) {
                        this.getArrayGrupo('GrupoI')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo I')
                    }
                else {
                    Util.exibirMensagem('Grupo I já possui dois competidores')
                }
                return;

            case 'GrupoC':
            case 'GrupoD':
                if(this.getArrayGrupo('GrupoJ')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoJ')[1], competidor)) {
                        this.getArrayGrupo('GrupoJ')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo J')
                    }
                else {
                    Util.exibirMensagem('Grupo J já possui dois competidores')
                }
                return;

            case 'GrupoE':
            case 'GrupoF':
                if(this.getArrayGrupo('GrupoK')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoK')[1], competidor)) {
                        this.getArrayGrupo('GrupoK')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo K')
                    }
                else {
                    Util.exibirMensagem('Grupo K já possui dois competidores')
                }
                return;

            case 'GrupoG':
            case 'GrupoH':
                if(this.getArrayGrupo('GrupoL')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoL')[1], competidor)) {
                        this.getArrayGrupo('GrupoL')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo L')
                    }
                else {
                    Util.exibirMensagem('Grupo L já possui dois competidores')
                }
                return;

            case 'GrupoI':
            case 'GrupoJ':
                if(this.getArrayGrupo('GrupoM')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoM')[1], competidor)) {
                        this.getArrayGrupo('GrupoM')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo M')
                    }
                else {
                    Util.exibirMensagem('Grupo M já possui dois competidores')
                }
                return;

            case 'GrupoK':
            case 'GrupoL':
                if(this.getArrayGrupo('GrupoN')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoN')[1], competidor)) {
                        this.getArrayGrupo('GrupoN')[1].push(competidor);
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo N')
                    }
                else {
                    Util.exibirMensagem('Grupo N já possui dois competidores')
                }
                return;

            case 'GrupoM':
            case 'GrupoN':
                if(this.getArrayGrupo('GrupoFinal')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoFinal')[1], competidor)) {
                        this.getArrayGrupo('GrupoFinal')[1].push(competidor);

                        this.getArrayGrupo(nomeGrupo)[1].every((_competidor : any)=>{
                            if(competidor.id != _competidor.id){
                                this.getArrayGrupo('GrupoTerceiroLugar')[1].push(_competidor);
                                return false;
                            }
                            return true;
                        });

                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo Final')
                    }
                else {
                    Util.exibirMensagem('Grupo Final já possui dois competidores')
                }
                return;

            case 'GrupoTerceiroLugar':
                /*if(this.getArrayGrupo('GrupoFinal')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoFinal')[1], competidor)) {
                        this.getArrayGrupo('GrupoFinal')[1].push(competidor);

                        this.getArrayGrupo(nomeGrupo)[1].every((_competidor : any)=>{
                            if(competidor.id != _competidor.id){
                                this.getArrayGrupo('GrupoTerceiroLugar')[1].push(_competidor);
                                return false;
                            }
                            return true;
                        });

                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo Final')
                    }
                else {
                    Util.exibirMensagem('Grupo Final já possui dois competidores')
                }*/
                this.TerceiroLugar = competidor;
                return;

            case 'GrupoFinal':
                /*if(this.getArrayGrupo('GrupoFinal')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoFinal')[1], competidor)) {
                        this.getArrayGrupo('GrupoFinal')[1].push(competidor);

                        this.getArrayGrupo(nomeGrupo)[1].every((_competidor : any)=>{
                            if(competidor.id != _competidor.id){
                                this.getArrayGrupo('GrupoTerceiroLugar')[1].push(_competidor);
                                return false;
                            }
                            return true;
                        });

                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo Final')
                    }
                else {
                    Util.exibirMensagem('Grupo Final já possui dois competidores')
                }*/
                this.Campeao = competidor;
                this.getArrayGrupo(nomeGrupo)[1].every((_competidor : any)=>{
                    if(competidor.id != _competidor.id){
                        this.SegundoLugar = _competidor
                        return false;
                    }
                    return true;
                });
                return;
        

        }
    }


    getArrayGrupo(grupo : string) : any[] {
        var retArray : any[] = [];
        this.Grupos.forEach((_grupo)=> {
            if(_grupo[0] == grupo){
                retArray = _grupo;
            }
        });
        return retArray;
    }

    public static clone(chaveamento: ChaveamentoCampeonato) {
        let _chaveamento : ChaveamentoCampeonato = new ChaveamentoCampeonato ();
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
        _chaveamento.Grupos = chaveamento.Grupos;
        _chaveamento.DisputaTerceiroLugar = chaveamento.DisputaTerceiroLugar;
        _chaveamento.DisputaFinal = chaveamento.DisputaFinal;
        _chaveamento.Campeao = chaveamento.Campeao;
        _chaveamento.SegundoLugar = chaveamento.SegundoLugar;
        _chaveamento.TerceiroLugar = chaveamento.TerceiroLugar;
        _chaveamento.iniciado = chaveamento.iniciado;
        return _chaveamento;
    }
}