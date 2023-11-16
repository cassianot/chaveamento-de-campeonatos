import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { RoutesAPI } from '../util/routes-api';
import { Categoria } from '../model/categoria.model';
import { ErrorUtil } from '../util/ErrorUtil';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${RoutesAPI.CATEGORIA}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${RoutesAPI.CATEGORIA}/${id}`).pipe(
      catchError(ErrorUtil.handleError)
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
