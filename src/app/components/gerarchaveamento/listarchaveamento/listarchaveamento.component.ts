import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listarchaveamento',
  templateUrl: './listarchaveamento.component.html',
  styleUrls: ['./listarchaveamento.component.css']
})
export class ListarchaveamentoComponent {

  visivel : boolean = false;
  @Input() listaCompetidoresSelecionados: any[] = [];

}
