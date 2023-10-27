import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RoutesAPI } from '../util/routes-api';
import { Categoria } from '../model/categoria.model';
import { catchError } from 'rxjs/operators';
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

  salvarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(
      `${RoutesAPI.CATEGORIA}`,
      categoria,
      this.httpOptions
    );
  }

  atualizarCategoria(categoria: Categoria): Observable<Categoria> {
    console.log(categoria);
    return this.httpClient.put<Categoria>(
      `${RoutesAPI.CATEGORIA}/${categoria.id}`,
      categoria,
      this.httpOptions
    );
  }
}
