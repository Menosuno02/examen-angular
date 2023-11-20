import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceTienda {
  constructor(private _http: HttpClient) {}

  getCubos(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Cubos';
    return this._http.get(url + request);
  }

  getMarcas(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Cubos/Marcas';
    return this._http.get(url + request);
  }

  getCubosMarca(marca: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Cubos/CubosMarca/' + marca;
    return this._http.get(url + request);
  }

  getCubo(id: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Cubos/' + id;
    return this._http.get(url + request);
  }

  getComentariosCubo(id: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/ComentariosCubo/GetComentariosCubo/' + id;
    return this._http.get(url + request);
  }

  loginUser(email: string, pass: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Manage/Login';
    let json = JSON.stringify({
      email: email,
      password: pass,
    });
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url + request, json, { headers: header });
  }

  registerUser(nombre: string, email: string, pass: string): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Manage/RegistroUsuario';
    let json = JSON.stringify({
      idUsuario: 0,
      nombre: nombre,
      email: email,
      pass: pass,
    });
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url + request, json, { headers: header });
  }

  perfilUser(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Manage/PerfilUsuario';
    let header = new HttpHeaders({
      Authorization: 'bearer ' + environment.tokenUser,
    });
    return this._http.get(url + request, { headers: header });
  }

  getCompras(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Compra/ComprasUsuario';
    let header = new HttpHeaders({
      Authorization: 'bearer ' + environment.tokenUser,
    });
    return this._http.get(url + request, { headers: header });
  }

  comprarCubo(idCubo: number): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Compra/InsertarPedido/' + idCubo;
    let header = new HttpHeaders({
      Authorization: 'bearer ' + environment.tokenUser,
    });
    return this._http.post(url + request, { headers: header });
  }
}
