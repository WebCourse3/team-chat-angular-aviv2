import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) { }

  // loginUser (userName: string): Observable<User[]> {
  //   return this.http.get<User[]>("http://localhost:3000/validate/" + userName)
  //     .pipe(
  //       tap(users => this.log(`fetched users`)),
  //       catchError(this.handleError('getUsers', []))
  //     );
  // }


  loginUser (userName: string,password:number) {
    let body = {username: userName,password : password};
    return this.http.post("http://localhost:3000/validate/",body)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error.toString()); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
  }

}

