import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements AfterViewInit {
  
  icon = "layers";
  title = "Chaveamento de campeonatos";
  logged! : boolean;

  @ViewChild('mobile') sideNav?: ElementRef;
  @ViewChild('dropdownCadastro') dropDown?: ElementRef;
  @ViewChild('colapse') colapse?: ElementRef;
  
  ngAfterViewInit() : void {
    M.Sidenav.init(this.sideNav?.nativeElement);
    M.Dropdown.init(this.dropDown?.nativeElement, {hover:false});
    M.Collapsible.init(this.colapse?.nativeElement, {accordion:true});
  }

  logado(){
    return !WebStorageUtil.get('logged_in');
  }
  
}
