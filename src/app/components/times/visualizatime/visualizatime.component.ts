import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from 'src/app/model/time.model';
import { TimesService } from 'src/app/services/times.service';

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
    this.timesService.getTimeById(this.timeId).subscribe(
      (time) => {
        this.time = time;
      },
      (error) => {
        M.toast({html: 'Parâmetros inválidos!', classes: 'rounded'});
        this.router.navigate(['/times']);
      }
    );
  }

  getStatus(){
    if(this.time.ativo)
      return "Ativo";
    return "Inativo";
  }
}
