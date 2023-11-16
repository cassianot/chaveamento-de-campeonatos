import { Util } from "../util/util";
import { Campeonato } from "./campeonato.model";
import { Categoria } from "./categoria.model";
import { Competidor } from "./competidor.model";

export class ChaveamentoCampeonato{
    id?:number;
    Campeonato: Campeonato = new Campeonato("", new Categoria("", "", true), "", true);
    Grupos: any[] = [];
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

    setVencedor(nomeGrupo: string, competidor : any) : boolean {
        switch(nomeGrupo){
            case 'GrupoA':
            case 'GrupoB':
                if(this.getArrayGrupo('GrupoI')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoI')[1], competidor)) {
                        this.getArrayGrupo('GrupoI')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo I');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo I já possui dois competidores');
                    return false;
                }

            case 'GrupoC':
            case 'GrupoD':
                if(this.getArrayGrupo('GrupoJ')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoJ')[1], competidor)) {
                        this.getArrayGrupo('GrupoJ')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo J');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo J já possui dois competidores');
                    return false;
                }

            case 'GrupoE':
            case 'GrupoF':
                if(this.getArrayGrupo('GrupoK')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoK')[1], competidor)) {
                        this.getArrayGrupo('GrupoK')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo K');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo K já possui dois competidores');
                    return false;
                }

            case 'GrupoG':
            case 'GrupoH':
                if(this.getArrayGrupo('GrupoL')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoL')[1], competidor)) {
                        this.getArrayGrupo('GrupoL')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo L');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo L já possui dois competidores');
                    return false;
                }

            case 'GrupoI':
            case 'GrupoJ':
                if(this.getArrayGrupo('GrupoM')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoM')[1], competidor)) {
                        this.getArrayGrupo('GrupoM')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo M');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo M já possui dois competidores');
                    return false;
                }

            case 'GrupoK':
            case 'GrupoL':
                if(this.getArrayGrupo('GrupoN')[1].length < 2)
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoN')[1], competidor)) {
                        this.getArrayGrupo('GrupoN')[1].push(competidor);
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo N');
                        return false;
                    }
                else {
                    Util.exibirMensagem('Grupo N já possui dois competidores');
                    return false;
                }

            case 'GrupoM':
            case 'GrupoN':
                if(this.getArrayGrupo('GrupoFinal')[1].length < 2) {
                    if(!this.checaDuplicidade(this.getArrayGrupo('GrupoFinal')[1], competidor)) {
                        this.getArrayGrupo('GrupoFinal')[1].push(competidor);
                        this.getArrayGrupo(nomeGrupo)[1].forEach((_competidor : Competidor)=>{
                            if(competidor.id != _competidor.id){
                                this.getArrayGrupo('GrupoTerceiroLugar')[1].push(_competidor);
                            }  
                        });
                        return true;
                    } else {
                        Util.exibirMensagem('Este competidor já está no Grupo Final');
                        return false;
                    }
                } else {
                    Util.exibirMensagem('Grupo Final já possui dois competidores');
                    return false;
                }

            case 'GrupoTerceiroLugar':
                this.TerceiroLugar = competidor;
                return true;

            case 'GrupoFinal':
                this.Campeao = competidor;
                this.getArrayGrupo(nomeGrupo)[1].forEach((_competidor : any)=>{
                    if(competidor.id != _competidor.id){
                        this.SegundoLugar = _competidor
                    }
                });
                this.iniciado = false;
                return true;
        
            default:
                return false;
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
        _chaveamento.Grupos = chaveamento.Grupos;
        _chaveamento.Campeao = chaveamento.Campeao;
        _chaveamento.SegundoLugar = chaveamento.SegundoLugar;
        _chaveamento.TerceiroLugar = chaveamento.TerceiroLugar;
        _chaveamento.iniciado = chaveamento.iniciado;
        return _chaveamento;
    }
}