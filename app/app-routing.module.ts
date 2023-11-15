import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { VisualizaCategoriaComponent } from './components/categorias/visualiza-categoria/visualiza-categoria.component';
import { TimesComponent } from './components/times/times.component';
import { VisualizatimeComponent } from './components/times/visualizatime/visualizatime.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';
import { VisualizajogadorComponent } from './components/jogadores/visualizajogador/visualizajogador.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';
import { VisualizacampeonatoComponent } from './components/campeonatos/visualizacampeonato/visualizacampeonato.component';
import { GerarchaveamentoComponent } from './components/gerarchaveamento/gerarchaveamento.component';
import { GestaocampeonatoComponent } from './components/gestaocampeonato/gestaocampeonato.component';
import { RelatorioCampeonatoComponent } from './components/relatorio-campeonato/relatorio-campeonato.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './util/AuthenticationGuard';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard]},
  {path: 'categorias/:id', component: VisualizaCategoriaComponent, canActivate: [AuthGuard]},
  {path: 'times', component: TimesComponent, canActivate: [AuthGuard]},
  {path: 'times/:id', component: VisualizatimeComponent, canActivate: [AuthGuard]},
  {path: 'jogadores', component: JogadoresComponent, canActivate: [AuthGuard]},
  {path: 'jogadores/:id', component: VisualizajogadorComponent, canActivate: [AuthGuard]},
  {path: 'campeonatos', component: CampeonatosComponent, canActivate: [AuthGuard]},
  {path: 'campeonatos/:id', component: VisualizacampeonatoComponent, canActivate: [AuthGuard]},
  {path: 'gerarchaveamento', component: GerarchaveamentoComponent, canActivate: [AuthGuard]},
  {path: 'gestaocampeonato', component: GestaocampeonatoComponent, canActivate: [AuthGuard]},
  {path: 'gestaocampeonato/:id', component: GestaocampeonatoComponent, canActivate: [AuthGuard]},
  {path: 'relatorio', component: RelatorioCampeonatoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
