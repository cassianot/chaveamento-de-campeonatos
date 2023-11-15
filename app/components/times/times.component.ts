import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Time } from 'src/app/model/time.model';
import { TimesService } from 'src/app/services/times.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

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
    this.timeService.getTimes().subscribe({
      next: (times) => {
        this.listaTimes = times;
        Util.ordenaListaTimes(this.listaTimes);
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Parâmetros inválidos!');
      }
    });
  }

  salvarTime(time: Time){
    this.timeService
      .salvarTime(time)
      .then((_time) => {
        this.listaTimes.push(_time);
        this.time = new Time("", "", true);
        Util.ordenaListaTimes(this.listaTimes);
        Util.exibirMensagem(`Time salvo com sucesso: ${_time.nomeCompetidor}`);
      })
      .catch((error)=>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar time: ${time.nomeCompetidor}`);
      });
  }

  atualizarTime(time: Time){
    this.timeService
      .atualizarTime(time)
      .then((_time : Time) =>{
        this.listaTimes.splice(this.listaTimes.indexOf(this.timeOld), 1);
        this.listaTimes.push(_time);
        this.atualiza = false;
        this.time = new Time("", "", true);
        Util.ordenaListaTimes(this.listaTimes)
        Util.exibirMensagem(`Time atualizada com sucesso: ${_time.nomeCompetidor}`);
      })
      .catch((error)=>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao atualizar time: ${time.nomeCompetidor}`);
      })
  }

  ativarDesativarTime(time: Time){
    this.timeService
      .atualizarTime(time)
      .then((_time : Time) =>{
        Util.exibirMensagem(`Status atualizado: ${_time.nomeCompetidor}`);
      })
      .catch((error)=>{
        Util.exibirMensagem(`Erro ao atualizar status: ${time.nomeCompetidor}`);
      })
  }

  editarTime(time: Time){
    this.timeOld = time;
    this.time = Time.clone(time);
    this.atualiza = true;
  }

  limparFormulario(){
    this.time = new Time("", "", true);
    this.atualiza = false;
  }

}

