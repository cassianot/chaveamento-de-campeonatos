import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaChaveamento: ChaveamentoCampeonato[] = [];

  constructor(private gestaoCampeonatoService: GerarchaveamentoService){ }
  ngOnInit(): void {
    this.gestaoCampeonatoService.getChaveamentos(true).subscribe({
      next: (chaveamentos) => {
        this.listaChaveamento = chaveamentos;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Erro ao carregar chaveamentos');
      }
    });
  }
}
