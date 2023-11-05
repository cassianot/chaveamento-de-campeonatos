import { AfterViewInit, Component, Input } from '@angular/core';
import { catchError } from 'rxjs';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
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
      return objeto.nomeCompetidor;
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
      return Util.abreviarNomes(array[1][index].nomeCompetidor);
    } else {
      return "Aguardando resultado";
    }
  }

  getObjetoDoCompetidor(nomeGrupo: any, index: number){
    var array = this.chaveamento.getArrayGrupo(nomeGrupo);
    return array[1][index];
  }

  setVencedor(grupo: string, competidor: any){
    if(this.chaveamento.Campeao?.length > 0 || this.chaveamento.Campeao === undefined) {
      var ret = this.chaveamento.setVencedor(grupo, competidor);
      this.chaveamentoService
        .atualizarChaveamento(this.chaveamento)
        .then(()=>{
          if(ret)
            Util.exibirMensagem(`${competidor.nomeCompetidor} foi para a próxima fase!`);
        })
        .catch((error)=>{
          catchError(ErrorUtil.handleError);
          console.log(error);
          Util.exibirMensagem('Erro ao atualizar tabela');
        })
    } else {
      Util.exibirMensagem(`Este campeonato já possui um campeão: ${this.chaveamento.Campeao.nomeCompetidor}`);
    }
  }
}
