import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { RoutesAPI } from '../util/routes-api';
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async getCategorias(): Promise<Categoria[]> {
    return await lastValueFrom(
      this.httpClient.get<Categoria[]>(`${RoutesAPI.CATEGORIA}`)
    );
  }

  async getCategoriaById(id: number): Promise<Categoria> {
    return await lastValueFrom(
      this.httpClient.get<Categoria>(`${RoutesAPI.CATEGORIA}/${id}`)
    );
  }

  async salvarCategoria(categoria: Categoria): Promise<Categoria> {
    return await lastValueFrom(
      this.httpClient.post<Categoria>(
        `${RoutesAPI.CATEGORIA}`,
        categoria,
        this.httpOptions
      )
    );
  }

  async atualizarCategoria(categoria: Categoria): Promise<Categoria> {
    return await lastValueFrom(
      this.httpClient.put<Categoria>(
        `${RoutesAPI.CATEGORIA}/${categoria.id}`,
        categoria,
        this.httpOptions
      )
    );
  }
}
