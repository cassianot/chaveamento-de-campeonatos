import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VisualizaCategoriaComponent } from './components/categorias/visualiza-categoria/visualiza-categoria.component';
import { TimesComponent } from './components/times/times.component';
import { VisualizatimeComponent } from './components/times/visualizatime/visualizatime.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/:id', component: VisualizaCategoriaComponent},
  {path: 'times', component: TimesComponent},
  {path: 'times/:id', component: VisualizatimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
