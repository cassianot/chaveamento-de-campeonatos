import { Injectable } from '@angular/core';
import { RoutesAPI } from '../util/routes-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorUtil } from '../util/ErrorUtil';
import { Jogador } from '../model/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getJogadores(): Observable<Jogador[]> {
    return this.httpClient.get<Jogador[]>(`${RoutesAPI.JOGADOR}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  getJogadorById(id: number): Observable<Jogador> {
    return this.httpClient.get<Jogador>(`${RoutesAPI.JOGADOR}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  salvarJogador(jogador: Jogador): Observable<Jogador> {
    return this.httpClient.post<Jogador>(
      `${RoutesAPI.JOGADOR}`,
      jogador,
      this.httpOptions
    );
  }

  atualizarJogador(jogador: Jogador): Observable<Jogador> {
    return this.httpClient.put<Jogador>(
      `${RoutesAPI.JOGADOR}/${jogador.id}`,
      jogador,
      this.httpOptions
    );
  }
}
