import { Component, Input, ViewChild } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-gerir-campeonato',
  templateUrl: './gerir-campeonato.component.html',
  styleUrls: ['./gerir-campeonato.component.css']
})
export class GerirCampeonatoComponent {
  visivel: boolean = false;
  @Input() chaveamento!:  ChaveamentoCampeonato<any>;

  getNomeDoObjeto(objeto: any){
    if(objeto !== undefined) {
      if(this.chaveamento.TipoCompetidor == 'times') {
        return Util.abreviarNomes(objeto.nomeTime);
      } else {
        return Util.abreviarNomes(objeto.nomeJogador);
      }
    } else {
      return "Aguardando resultado";
    }
    
  }
}
