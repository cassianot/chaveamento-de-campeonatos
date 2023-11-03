import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/ErrorUtil';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  getUser(email : string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${RoutesAPI.USER}?email=${email}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }
}
