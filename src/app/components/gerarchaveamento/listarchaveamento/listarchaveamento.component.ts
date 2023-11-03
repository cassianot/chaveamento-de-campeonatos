import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { Util } from 'src/app/util/util';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';

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

  constructor(
    private chaveamentoService : GerarchaveamentoService,
    private router : Router
  ) { }

  getNomeDoObjeto(nomeGrupo: any, index: number = 0){
    var array = this.chaveamento.Grupos.find((obj)=>{
      if(obj[0] == nomeGrupo){
        return obj;
      };
    });
    if(this.tipoCompetidor == 'times'){
      return Util.abreviarNomes(array[1][index].nomeTime);
    } else {
      return Util.abreviarNomes(array[1][index].nomeJogador);
    }
  }

  iniciarCampeonato(){
    this.chaveamento.iniciado = true;
    this.chaveamentoService.salvarChaveamento(this.chaveamento).subscribe(
      () => {
        M.toast({html: 'Cameponato Iniciado', classes: 'rounded'});
        this.router.navigate(['/inicio']);
      },
      (error) => {
        M.toast({html: 'Selecione um campeonato', classes: 'rounded'});
      }
    );
  }

}
