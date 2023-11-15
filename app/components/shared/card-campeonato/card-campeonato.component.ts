import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-campeonato',
  templateUrl: './card-campeonato.component.html',
  styleUrls: ['./card-campeonato.component.css']
})
export class CardCampeonatoComponent {

  @Input() tituloGrupo! : string;
  @Input() class!: string;
  @Input() competidor1! : string;
  @Input() competidor2! : string;

}
