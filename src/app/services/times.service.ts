import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Time } from '../model/time.model';
import { RoutesAPI } from '../util/routes-api';
import { Observable, lastValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorUtil } from '../util/ErrorUtil';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async getTimes(): Promise<Time[]> {
    return await lastValueFrom(
      this.httpClient.get<Time[]>(`${RoutesAPI.TIME}`)
    );
  }

  async getTimeById(id: number): Promise<Time> {
    return await lastValueFrom(
      this.httpClient.get<Time>(`${RoutesAPI.TIME}/${id}`)
    );
  }

  async salvarTime(time: Time): Promise<Time> {
    return await lastValueFrom(
      this.httpClient.post<Time>(
        `${RoutesAPI.TIME}`,
        time,
        this.httpOptions
      )
    );
  }

  async atualizarTime(time: Time): Promise<Time> {
    return await lastValueFrom(
      this.httpClient.put<Time>(
        `${RoutesAPI.TIME}/${time.id}`,
        time,
        this.httpOptions
      )
    )
  }

}
