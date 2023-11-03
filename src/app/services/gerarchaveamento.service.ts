import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChaveamentoCampeonato } from '../model/chaveamentoCampeonato';
import { Observable, catchError } from 'rxjs';
import { ErrorUtil } from '../util/ErrorUtil';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root'
})
export class GerarchaveamentoService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getChaveamentos(): Observable<ChaveamentoCampeonato[]> {
    return this.httpClient.get<ChaveamentoCampeonato[]>(`${RoutesAPI.CHAVEAMENTO}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  salvarChaveamento(chaveamento: ChaveamentoCampeonato): Observable<ChaveamentoCampeonato> {
    return this.httpClient.post<ChaveamentoCampeonato>(
      `${RoutesAPI.CHAVEAMENTO}`,
      chaveamento,
      this.httpOptions
    );
  }

  atualizarChaveamento(chaveamento: ChaveamentoCampeonato): Observable<ChaveamentoCampeonato> {
    return this.httpClient.put<ChaveamentoCampeonato>(
      `${RoutesAPI.CHAVEAMENTO}/${chaveamento.id}`,
      chaveamento,
      this.httpOptions
    );
  }
}
