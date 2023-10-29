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
  @Input() chaveamento!: ChaveamentoCampeonato<any>;

  constructor(
    private chaveamentoService : GerarchaveamentoService,
    private router : Router
  ) { }

  getNomeDoObjeto(objeto: any){
    if(this.tipoCompetidor == 'times'){
      return Util.abreviarNomes(objeto.nomeTime);
    } else {
      return Util.abreviarNomes(objeto.nomeJogador);
    }
  }

  iniciarCampeonato(){
    this.chaveamento.iniciado = true;
    console.log(this.chaveamento);
    this.chaveamentoService.salvarChaveamento(this.chaveamento).subscribe(
      () => {
        M.toast({html: 'Cameponato Iniciado', classes: 'rounded'});
        this.router.navigate(['/']);
      },
      (error) => {
        M.toast({html: 'Selecione um campeonato', classes: 'rounded'});
      }
    );
  }

}
