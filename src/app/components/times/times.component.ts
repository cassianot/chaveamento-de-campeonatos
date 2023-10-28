import { Component } from '@angular/core';
import { Time } from 'src/app/model/time.model';
import { TimesService } from 'src/app/services/times.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent {

  listaTimes: Time[];
  time: Time;
  timeOld!: Time;
  atualiza : boolean;

  constructor(
    private timeService : TimesService) {

    this.listaTimes = [];
    this.time = new Time("", "", true);
    this.atualiza = false;
  
  }

  ngOnInit(): void {
    this.timeService.getTimes().subscribe(
      (times) => {
        this.listaTimes = times;
        this.ordenaLista();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  exibirMensagem(mensagem: string){
    M.toast({html: mensagem, classes: 'rounded'});
  }

  salvarTime(time: Time){
    this.timeService.salvarTime(time).subscribe(
      (_time) => {
        this.listaTimes.push(_time);
        this.ordenaLista();
        this.exibirMensagem(`Time salvo com sucesso: ${time.nomeTime}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao salvar time: ${time.nomeTime}`);
      }
    );
  }

  atualizarTime(time: Time){
    this.timeService.atualizarTime(time).subscribe(
      (_time) => {
        this.listaTimes.splice(this.listaTimes.indexOf(this.timeOld), 1);
        this.listaTimes.push(_time);
        this.atualiza = false;
        this.time = new Time("", "", true);
        this.ordenaLista();
        this.exibirMensagem(`Time atualizada com sucesso: ${time.nomeTime}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar time: ${time.nomeTime}`);
      }
    );
  }

  ativarDesativarTime(time: Time){
    this.timeService.atualizarTime(time).subscribe(
      (_time) => {
        this.exibirMensagem(`Status atualizado: ${time.nomeTime}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar status: ${time.nomeTime}`);
      }
    );
  }

  editarTime(time: Time){
    this.timeOld = time;
    this.time = Time.clone(time);
    this.atualiza = true;
  }

  limparFormulario(limpa: string){
    this.time = new Time("", "", true);
    this.atualiza = false;
  }

  ordenaLista(){
    this.listaTimes.sort((a,b) => a.nomeTime!.localeCompare(b.nomeTime!));
  }

}

