import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Categoria } from 'src/app/model/categoria.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {

  listaCampeonatos: Campeonato[];
  campeonato: Campeonato;
  campeonatoOld!: Campeonato;
  atualiza : boolean;

  constructor(
      private campeonatoService : CampeonatoService) {

    this.listaCampeonatos = [];
    this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
    this.atualiza = false;

  }

  ngOnInit(): void {
    this.campeonatoService
      .getCampeonatos()
      .then((campeonatos : Campeonato[]) =>{
        this.listaCampeonatos = Util.ordenaListaCameponato(campeonatos);
      })
      .catch((error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
      })
  }

  salvarCampeonato(campeonato: Campeonato){
    this.campeonatoService
      .salvarCampeonato(campeonato)
      .then((_campeonato : Campeonato) =>{
        this.listaCampeonatos.push(_campeonato);
        Util.ordenaListaCameponato(this.listaCampeonatos);
        this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
        Util.exibirMensagem(`Campeonato salva com sucesso: ${_campeonato.nomeCampeonato}`);
      })
      .catch((error)=>{
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao salvar campeonato: ${campeonato.nomeCampeonato}`);
      });
  }

  atualizarCampeonato(campeonato: Campeonato){
    this.campeonatoService
      .atualizarCampeonato(campeonato)
      .then((_campeonato : Campeonato) => {
        this.listaCampeonatos.splice(this.listaCampeonatos.indexOf(this.campeonatoOld), 1);
        this.listaCampeonatos.push(_campeonato);
        this.atualiza = false;
        this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
        Util.ordenaListaCameponato(this.listaCampeonatos);
        Util.exibirMensagem(`Campeonato atualizada com sucesso: ${_campeonato.nomeCampeonato}`);
      })
      .catch((error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao atualizar campeonato: ${campeonato.nomeCampeonato}`);
      })
  }

  ativarDesativarCampeonato(campeonato: Campeonato){
    this.campeonatoService
      .atualizarCampeonato(campeonato)
      .then((_campeonato : Campeonato) => {
        Util.exibirMensagem(`Status atualizado: ${_campeonato.nomeCampeonato}`);
      })
      .catch((error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem(`Erro ao atualizar status: ${campeonato.nomeCampeonato}`);
      })

  }

  editarCampeonato(campeonato: Campeonato){
    this.campeonatoOld = campeonato;
    this.campeonato = Campeonato.clone(campeonato);
    this.atualiza = true;
  }

  limparFormulario(limpa: string){
    this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
    this.atualiza = false;
  }
}
