import { Component } from '@angular/core';
import { WebStorageUtil } from './util/web-storage-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  title = "chaveamentoCampeonato";
  logged = false;

}
