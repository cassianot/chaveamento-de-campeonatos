import { Component, Input } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-listar-relatorio',
  templateUrl: './listar-relatorio.component.html',
  styleUrls: ['./listar-relatorio.component.css']
})
export class ListarRelatorioComponent {

  visivel: boolean = false;
  @Input() chaveamento! : ChaveamentoCampeonato;

  getNomeDoObjeto(objeto: any){
    if(objeto !== undefined) {
      if(this.chaveamento.TipoCompetidor == 'times') {
        //return Util.abreviarNomes(objeto.nomeTime);
        return objeto.nomeTime;
      } else {
        //return Util.abreviarNomes(objeto.nomeJogador);
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
        return array[1][index].nomeTime;
      } else {
        return array[1][index].nomeJogador;
      }
    } else {
      return "Aguardando resultado";
    }
  }

}
