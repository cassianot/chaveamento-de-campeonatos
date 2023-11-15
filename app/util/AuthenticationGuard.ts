import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, } from '@angular/router';
import { WebStorageUtil } from './web-storage-util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let logged = WebStorageUtil.get('logged_in');
      if(!logged){
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
  }
}