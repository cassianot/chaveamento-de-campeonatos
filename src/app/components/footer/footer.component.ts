import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year?: number;
  description?: string;

  constructor(){
    this.year = new Date().getFullYear();
    this.description = "Projeto de desenvolvimento do software de chaveamento de campeonatos."
  }
}
