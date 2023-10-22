import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCampeonatoComponent } from './components/cadastro-campeonato/cadastro-campeonato.component';
import { CadastroCategoriasComponent } from './components/cadastro-categorias/cadastro-categorias.component';

const routes: Routes = [
  {
    path: 'cadastrocategorias',
    component: CadastroCategoriasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
