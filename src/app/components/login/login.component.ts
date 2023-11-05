import { AfterViewInit, Component, ElementRef, InjectionToken, Injector, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Util } from 'src/app/util/util';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('modalLogin') modalLogin?: ElementRef;
  button! : M.Modal;
  user : User;
  
  constructor(private userService : UserService, private route: Router){
    this.user = new User("", "");
    if(this.route.url.search('logout')){
      this.deslogar();
    }
  }

  ngAfterViewInit(): void {
    this.button = M.Modal.init(this.modalLogin?.nativeElement);
    this.button.open();
  }

  openLogin(){
    this.button.open();
  }

  doLogin(user: User){
    this.userService
      .getUser(user.email)
      .then((_user: User[]) => {
        if(Object.keys(_user).length == 0){
          Util.exibirMensagem('Login ou senha inválidos');
        } else {
          if(_user[0].password != user.password) {
            Util.exibirMensagem('Login ou senha inválidos');
          } else {
            WebStorageUtil.set('logged_in', true);
            WebStorageUtil.set('user', _user);
            this.route.navigate(['/inicio']);
          }
        }
      })
      .catch((error) =>{
        Util.exibirMensagem('Erro: Usuário ou senha inválidos');
        console.log(error);
      })
  }

  deslogar() {
    window.localStorage.clear();
    this.route.navigate(['login']);
  }

  autopreencher(){
    this.user.email="email@email.com";
    this.user.password="123456789";
  }

}
