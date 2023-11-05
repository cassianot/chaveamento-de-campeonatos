import { Component, OnInit } from '@angular/core';
import { ChaveamentoCampeonato } from 'src/app/model/chaveamentoCampeonato';
import { GerarchaveamentoService } from 'src/app/services/gerarchaveamento.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaChaveamento: ChaveamentoCampeonato[] = [];

  constructor(private gestaoCampeonatoService: GerarchaveamentoService){ }
  ngOnInit(): void {
    this.gestaoCampeonatoService
      .getChaveamentos(true)
      .then((chaveamento : ChaveamentoCampeonato[]) => {
        this.listaChaveamento = chaveamento;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
