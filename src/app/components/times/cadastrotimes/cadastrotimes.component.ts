import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Time } from 'src/app/model/time.model';

@Component({
  selector: 'app-cadastrotimes',
  templateUrl: './cadastrotimes.component.html',
  styleUrls: ['./cadastrotimes.component.css']
})
export class CadastrotimesComponent {
  @Input() time! : Time;
  @Input() atualiza! : boolean;
  @Input() listaTimes : Time[] = [];
  @Output() salvaTime = new EventEmitter<Time>();
  @Output() atualizaTime = new EventEmitter<Time>();
  @Output() limpaFormulario = new EventEmitter();

  ngOnInit(){
    this.time = new Time("", "", true);
  }

  cadastraTime() : void {
    this.salvaTime.emit(this.time);
  }

  editaTime() : void {
    this.atualizaTime.emit(this.time);
  }

  limparFormulario(){
    this.limpaFormulario.emit();
  }
}
