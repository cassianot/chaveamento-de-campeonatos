import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroCategoriasComponent } from './components/categorias/cadastrocategorias/cadastrocategoria.component';
import { ListacategoriasComponent } from './components/categorias/listacategorias/listacategorias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VisualizaCategoriaComponent } from './components/categorias/visualiza-categoria/visualiza-categoria.component';
import { TimesComponent } from './components/times/times.component';
import { CadastrotimesComponent } from './components/times/cadastrotimes/cadastrotimes.component';
import { ListatimesComponent } from './components/times/listatimes/listatimes.component';
import { VisualizatimeComponent } from './components/times/visualizatime/visualizatime.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';
import { CadastrajogadorComponent } from './components/jogadores/cadastrajogador/cadastrajogador.component';
import { ListajogadoresComponent } from './components/jogadores/listajogadores/listajogadores.component';
import { VisualizajogadorComponent } from './components/jogadores/visualizajogador/visualizajogador.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { CadastrocampeonatosComponent } from './components/campeonatos/cadastrocampeonatos/cadastrocampeonatos.component';
import { VisualizacampeonatoComponent } from './components/campeonatos/visualizacampeonato/visualizacampeonato.component';
import { ListacampeonatosComponent } from './components/campeonatos/listacampeonatos/listacampeonatos.component';
import { GerarchaveamentoComponent } from './components/gerarchaveamento/gerarchaveamento.component';
import { ListarchaveamentoComponent } from './components/gerarchaveamento/listarchaveamento/listarchaveamento.component';
import { GestaocampeonatoComponent } from './components/gestaocampeonato/gestaocampeonato.component';
import { GerirCampeonatoComponent } from './components/gestaocampeonato/gerir-campeonato/gerir-campeonato.component';
import { RelatorioCampeonatoComponent } from './components/relatorio-campeonato/relatorio-campeonato.component';
import { ListarRelatorioComponent } from './components/relatorio-campeonato/listar-relatorio/listar-relatorio.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CardCampeonatoComponent } from './components/shared/card-campeonato/card-campeonato.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadastroCategoriasComponent,
    ListacategoriasComponent,
    CategoriasComponent,
    VisualizaCategoriaComponent,
    TimesComponent,
    CadastrotimesComponent,
    ListatimesComponent,
    VisualizatimeComponent,
    JogadoresComponent,
    CadastrajogadorComponent,
    ListajogadoresComponent,
    VisualizajogadorComponent,
    CampeonatosComponent,
    CadastrocampeonatosComponent,
    VisualizacampeonatoComponent,
    ListacampeonatosComponent,
    GerarchaveamentoComponent,
    ListarchaveamentoComponent,
    GestaocampeonatoComponent,
    GerirCampeonatoComponent,
    RelatorioCampeonatoComponent,
    ListarRelatorioComponent,
    LoginComponent,
    InicioComponent,
    CardCampeonatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
