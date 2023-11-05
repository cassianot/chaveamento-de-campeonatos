import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, lastValueFrom } from 'rxjs';
import { Campeonato } from '../model/campeonato.model';
import { RoutesAPI } from '../util/routes-api';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async getCampeonatos(): Promise<Campeonato[]> {
    return await lastValueFrom(
      this.httpClient.get<Campeonato[]>(`${RoutesAPI.CAMPEONATO}`)
    );
  }

  async getCampeonatoById(id: number): Promise<Campeonato> {
    return await lastValueFrom(
      this.httpClient.get<Campeonato>(`${RoutesAPI.CAMPEONATO}/${id}`)
    );
  }

  async salvarCampeonato(campeonato: Campeonato): Promise<Campeonato> {
    return await lastValueFrom(
      this.httpClient.post<Campeonato>(
        `${RoutesAPI.CAMPEONATO}`,
        campeonato,
        this.httpOptions
      )
    );
  }

  async atualizarCampeonato(campeonato: Campeonato): Promise<Campeonato> {
    return await lastValueFrom(
      this.httpClient.put<Campeonato>(
        `${RoutesAPI.CAMPEONATO}/${campeonato.id}`,
        campeonato,
        this.httpOptions
      )
    );
  }
}
