import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroCampeonatoComponent } from './components/campeonatos/cadastrocampeonato/cadastrocampeonato.component';
import { CadastroCategoriasComponent } from './components/categorias/cadastrocategorias/cadastrocategoria.component';
import { ListacampeonatosComponent } from './components/campeonatos/listacampeonatos/listacampeonatos.component';
import { ListacategoriasComponent } from './components/categorias/listacategorias/listacategorias.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadastroCampeonatoComponent,
    CadastroCategoriasComponent,
    ListacampeonatosComponent,
    ListacategoriasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
