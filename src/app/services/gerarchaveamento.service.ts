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

  getChaveamentos(): Observable<ChaveamentoCampeonato<any>[]> {
    return this.httpClient.get<ChaveamentoCampeonato<any>[]>(`${RoutesAPI.CHAVEAMENTO}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  salvarChaveamento(chaveamento: ChaveamentoCampeonato<any>): Observable<ChaveamentoCampeonato<any>> {
    return this.httpClient.post<ChaveamentoCampeonato<any>>(
      `${RoutesAPI.CHAVEAMENTO}`,
      chaveamento,
      this.httpOptions
    );
  }
}
