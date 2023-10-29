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
  @Input() chaveamento! : ChaveamentoCampeonato<any>;

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

}
