import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Campeonato } from '../model/campeonato.model';
import { ErrorUtil } from '../util/ErrorUtil';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCampeonatos(): Observable<Campeonato[]> {
    return this.httpClient.get<Campeonato[]>(`${RoutesAPI.CAMPEONATO}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  getCampeonatoById(id: number): Observable<Campeonato> {
    return this.httpClient.get<Campeonato>(`${RoutesAPI.CAMPEONATO}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  salvarCampeonato(categoria: Campeonato): Observable<Campeonato> {
    return this.httpClient.post<Campeonato>(
      `${RoutesAPI.CAMPEONATO}`,
      categoria,
      this.httpOptions
    );
  }

  atualizarCampeonato(categoria: Campeonato): Observable<Campeonato> {
    return this.httpClient.put<Campeonato>(
      `${RoutesAPI.CAMPEONATO}/${categoria.id}`,
      categoria,
      this.httpOptions
    );
  }
}
