import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterViewInit{

  @ViewChild('sidenav') sideNav1?: ElementRef;
  @ViewChild(LoginComponent) login? : LoginComponent;

  ngAfterViewInit() : void {
    M.Sidenav.init(this.sideNav1?.nativeElement);
  }

  logado(){
    return !WebStorageUtil.get('logged_in');
  }

  abrirLogin(){
    this.login?.openLogin();
  }

}
