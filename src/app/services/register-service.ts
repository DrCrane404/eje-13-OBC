import { Injectable } from '@angular/core';
import { RegisterInterface } from '../models/register-interface';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  urlBase = ''// link de render

  constructor (private httpClient:HttpClient){

  }
  registrarse(usuario:RegisterInterface): Observable <any>{
    // Metodo para resgistrarnos
     return this.httpClient.post(this.urlBase+'/auth/register', usuario, {timeout:10000})
  }
}
