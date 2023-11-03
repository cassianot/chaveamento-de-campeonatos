import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Campeonato } from 'src/app/model/campeonato.model';
import { Categoria } from 'src/app/model/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-cadastrocampeonatos',
  templateUrl: './cadastrocampeonatos.component.html',
  styleUrls: ['./cadastrocampeonatos.component.css']
})
export class CadastrocampeonatosComponent implements OnInit, AfterViewInit {

  listaCategorias : Categoria[] = [];
  selectPreenchido: boolean = false;
  selectTouched: number = 0;
  
  @Input() campeonato! : Campeonato;
  @Input() atualiza! : boolean;
  @Input() listaCampeonatos : Campeonato[] = [];
  @Output() exibeMensagem = new EventEmitter<string>();
  @Output() salvaCampeonato = new EventEmitter<Campeonato>();
  @Output() atualizaCampeonato = new EventEmitter<Campeonato>();
  @Output() limpaFormulario = new EventEmitter<string>();

  @ViewChild('comboCategorias') comboCategorias?: ElementRef;

  constructor(private categoriaService : CategoriaService) { }

  ngAfterViewInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias => {
        this.listaCategorias = categorias;
        this.ordenaListaCategoria();
      }
    );
    
    setTimeout(() => {
      M.FormSelect.init(this.comboCategorias?.nativeElement);
    }, 1000);
    
  }

  ngOnInit() : void {
    this.campeonato = new Campeonato("", new Categoria("", "", true), "", true);
  }

  cadastraCampeonato() : void {
    this.salvaCampeonato.emit(this.campeonato);
  }

  editaCampeonato() : void {
    this.atualizaCampeonato.emit(this.campeonato);
  }

  limparFormulario(){
    this.limpaFormulario.emit("");
  }

  ordenaListaCategoria(){
    this.listaCategorias.sort((a,b) => a.nomeCategoria!.localeCompare(b.nomeCategoria!));
  }

  verificaSePreenchido(){
    this.selectTouched++;
    this.selectPreenchido = true;
    if(this.campeonato.categoria == '')
      this.selectPreenchido = false;
  }

}
