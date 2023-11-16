import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Time } from 'src/app/model/time.model';
import { TimesService } from 'src/app/services/times.service';
import { ErrorUtil } from 'src/app/util/ErrorUtil';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-visualizatime',
  templateUrl: './visualizatime.component.html',
  styleUrls: ['./visualizatime.component.css']
})
export class VisualizatimeComponent {
  
  time! : Time;
  timeId!: number;

  constructor(
    private timesService: TimesService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.time = new Time("", "", true);
    if(route.snapshot.paramMap.has('id')){
        this.timeId = Number(route.snapshot.paramMap.get('id'));
    }
  }

  ngOnInit(){
    this.timesService.getTimeById(this.timeId).subscribe({
      next: (time) => {
        this.time = time;
      },
      error: (error) => {
        catchError(ErrorUtil.handleError);
        console.log(error);
        Util.exibirMensagem('Parâmetros inválidos!');
        this.router.navigate(['/times']);
      }
    });
  }

  getStatus(){
    if(this.time.ativo)
      return "Ativo";
    return "Inativo";
  }
}
