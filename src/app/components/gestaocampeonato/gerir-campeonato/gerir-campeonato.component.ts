import { AfterViewInit, Component, Input } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-gerir-campeonato',
  templateUrl: './gerir-campeonato.component.html',
  styleUrls: ['./gerir-campeonato.component.css']
})
export class GerirCampeonatoComponent {

  visivel: boolean = false;
  @Input() chaveamento!:  ChaveamentoCampeonato;

  constructor(private chaveamentoService: GerarchaveamentoService) { }

  getNomeDoObjeto(objeto: any){
    if(objeto !== undefined) {
      if(this.chaveamento.TipoCompetidor == 'times') {
        return objeto.nomeTime;
      } else {
        return objeto.nomeJogador;
      }
    } else {
      return "Aguardando resultado";
    }
  }

  getNomeDoCompetidor(nomeGrupo: any, index: number){
    var array = this.chaveamento.Grupos.find((obj)=>{
      if(obj[0] == nomeGrupo){
        return obj;
      };
    });

    if(array[1].length > 0 && array[1][index] !== undefined) {
      if(this.chaveamento.TipoCompetidor == 'times'){
        return Util.abreviarNomes(array[1][index].nomeTime);
      } else {
        return Util.abreviarNomes(array[1][index].nomeJogador);
      }
    } else {
      return "Aguardando resultado";
    }
  }

  getObjetoDoCompetidor(nomeGrupo: any, index: number){
    var array = this.chaveamento.getArrayGrupo(nomeGrupo);
    return array[1][index];
  }

  setVencedor(grupo: string, competidor: any){
    this.chaveamento.setVencedor(grupo, competidor);
    this.chaveamentoService.atualizarChaveamento(this.chaveamento).subscribe();
  }
}
