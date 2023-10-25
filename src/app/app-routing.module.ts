import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCampeonatoComponent } from './components/campeonatos/cadastrocampeonato/cadastrocampeonato.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'cadastrocampeonatos',
    component: CadastroCampeonatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
