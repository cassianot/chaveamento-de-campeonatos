import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Categoria } from 'src/app/model/categoria.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';

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
    this.campeonatoService.getCampeonatos().subscribe(
      (campeonatos) => {
        this.listaCampeonatos = campeonatos;
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

  salvarCampeonato(campeonato: Campeonato){
    this.campeonatoService.salvarCampeonato(campeonato).subscribe(
      (_campeonato) => {
        this.listaCampeonatos.push(_campeonato);
        this.ordenaLista();
        this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
        this.exibirMensagem(`Campeonato salva com sucesso: ${campeonato.nomeCampeonato}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao salvar campeonato: ${campeonato.nomeCampeonato}`);
      }
    );
  }

  atualizarCampeonato(campeonato: Campeonato){
    this.campeonatoService.atualizarCampeonato(campeonato).subscribe(
      (_campeonato) => {
        this.listaCampeonatos.splice(this.listaCampeonatos.indexOf(this.campeonatoOld), 1);
        this.listaCampeonatos.push(_campeonato);
        this.atualiza = false;
        this.campeonato = new Campeonato("", new Categoria("","",true), "", true);
        this.ordenaLista();
        this.exibirMensagem(`Campeonato atualizada com sucesso: ${campeonato.nomeCampeonato}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar campeonato: ${campeonato.nomeCampeonato}`);
      }
    );
  }

  ativarDesativarCampeonato(campeonato: Campeonato){
    this.campeonatoService.atualizarCampeonato(campeonato).subscribe(
      (_campeonato) => {
        this.exibirMensagem(`Status atualizado: ${campeonato.nomeCampeonato}`);
      },
      (error) => {
        this.exibirMensagem(`Erro ao atualizar status: ${campeonato.nomeCampeonato}`);
      }
    );
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

  ordenaLista(){
    this.listaCampeonatos.sort((a,b) => a.nomeCampeonato!.localeCompare(b.nomeCampeonato!));
  }

}
