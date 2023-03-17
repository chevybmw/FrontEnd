import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sujeto } from '../model/sujeto';

@Injectable({
  providedIn: 'root'
})
export class SujetoService {
  URL = environment.URL +  'sujeto/'
  //URL = 'https://backendn-m.herokuapp.com/sujeto/'
  //URL = 'https://backendfinalmarcos.herokuapp.com/sujeto/'
  //URL: 'http://localhost:8080/sujeto/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Sujeto[]>{
    return this.httpClient.get<Sujeto[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Sujeto>{
    return this.httpClient.get<Sujeto>(this.URL + `detail/${id}`);
  }
  public save(sujeto: Sujeto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', sujeto);
  }
  public update(id: number, sujeto: Sujeto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, sujeto);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
