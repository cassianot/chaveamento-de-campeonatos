import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroCampeonatoComponent } from './components/campeonatos/cadastrocampeonato/cadastrocampeonato.component';
import { CadastroCategoriasComponent } from './components/categorias/cadastrocategorias/cadastrocategoria.component';
import { ListacampeonatosComponent } from './components/campeonatos/listacampeonatos/listacampeonatos.component';
import { ListacategoriasComponent } from './components/categorias/listacategorias/listacategorias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VisualizaCategoriaComponent } from './components/categorias/visualiza-categoria/visualiza-categoria.component';
import { TimesComponent } from './components/times/times.component';
import { CadastrotimesComponent } from './components/times/cadastrotimes/cadastrotimes.component';
import { ListatimesComponent } from './components/times/listatimes/listatimes.component';
import { VisualizatimeComponent } from './components/times/visualizatime/visualizatime.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadastroCampeonatoComponent,
    CadastroCategoriasComponent,
    ListacampeonatosComponent,
    ListacategoriasComponent,
    CategoriasComponent,
    VisualizaCategoriaComponent,
    TimesComponent,
    CadastrotimesComponent,
    ListatimesComponent,
    VisualizatimeComponent
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
