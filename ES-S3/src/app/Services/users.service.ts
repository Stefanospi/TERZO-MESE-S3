import { Injectable } from '@angular/core';
import { iUser } from '../Models/i-user';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl:string = 'http://localhost:3000/users'
  allRegUsers: iUser[] = [];
  constructor(private http:HttpClient) {}

  getAll():Observable<iUser[]>{
    return this.http.get<iUser[]>(this.apiUrl).pipe(catchError(error => {
      return throwError(() => new Error('Errore nella richiesta get'))
    }))
  }
}
