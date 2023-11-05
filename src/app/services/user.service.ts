import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/ErrorUtil';
import { Observable, catchError, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  async getUser(email : string): Promise<User[]> {
    return await lastValueFrom(
      this.httpClient.get<User[]>(`${RoutesAPI.USER}?email=${email}`)
    );
  }
}
