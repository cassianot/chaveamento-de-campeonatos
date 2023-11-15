import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChaveamentoCampeonato } from '../model/chaveamentoCampeonato';
import { Observable, catchError, lastValueFrom } from 'rxjs';
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

  getChaveamentos(iniciado: boolean = false): Observable<ChaveamentoCampeonato[]> {
    let query = "";
    if(iniciado)
      query="?iniciado=true"
    return this.httpClient.get<ChaveamentoCampeonato[]>(`${RoutesAPI.CHAVEAMENTO}${query}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  async getChaveamentosById(id: number): Promise<ChaveamentoCampeonato> {
    return await lastValueFrom(
      this.httpClient.get<ChaveamentoCampeonato>(`${RoutesAPI.CHAVEAMENTO}/${id}`)
    );
  }

  async salvarChaveamento(chaveamento: ChaveamentoCampeonato): Promise<ChaveamentoCampeonato> {
    return await lastValueFrom(
      this.httpClient.post<ChaveamentoCampeonato>(
        `${RoutesAPI.CHAVEAMENTO}`,
        chaveamento,
        this.httpOptions
      )
    );
  }

  async atualizarChaveamento(chaveamento: ChaveamentoCampeonato): Promise<ChaveamentoCampeonato> {
    return await lastValueFrom(
      this.httpClient.put<ChaveamentoCampeonato>(
        `${RoutesAPI.CHAVEAMENTO}/${chaveamento.id}`,
        chaveamento,
        this.httpOptions
      )
    );
  }
}
