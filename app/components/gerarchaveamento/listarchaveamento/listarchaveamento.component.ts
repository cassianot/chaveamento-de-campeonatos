import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { Util } from 'src/app/util/util';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { catchError } from 'rxjs';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { CardCampeonatoComponent } from '../../shared/card-campeonato/card-campeonato.component';

@Component({
  selector: 'app-listarchaveamento',
  templateUrl: './listarchaveamento.component.html',
  styleUrls: ['./listarchaveamento.component.css']
})
export class ListarchaveamentoComponent {

  visivel : boolean = false;
  @Input() listaCompetidoresSelecionados: any[] = [];
  @Input() tipoCompetidor!: string;
  @Input() chaveamento!: ChaveamentoCampeonato;
  @ViewChild(CardCampeonatoComponent) cardCampeonato! : CardCampeonatoComponent;

  constructor(
    private chaveamentoService : GerarchaveamentoService,
    private router : Router
  ) { }

  getNomeDoObjeto(nomeGrupo: any, index: number = 0) : string{
    var array = this.chaveamento.Grupos.find((obj)=>{
      if(obj[0] == nomeGrupo){
        return obj;
      };
    });
    return Util.abreviarNomes(array[1][index].nomeCompetidor);
  }

  iniciarCampeonato(){
    this.chaveamento.iniciado = true;
    this.chaveamentoService
      .salvarChaveamento(this.chaveamento)
      .then(()=> {
        Util.exibirMensagem('Campeonato Iniciado');
        this.router.navigate(['/inicio']);
      })
      .catch((error) =>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Selecione um campeonato');
      })
  }

}
