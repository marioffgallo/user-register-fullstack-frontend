import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) { }

  /**
   * Do a posting 
   * @param user
   */
  createUser(user: User): Observable<User> {
      return this.http.post<User>(`${this.baseUrl}` + `/create`, user)
                  .pipe(
                    retry(3),
                    catchError(this.handleError)
                  );
  }

  updateUser(user: User): Observable<User> {
      return this.http.put<User> (`${this.baseUrl}` + `/update/` + user.ID, user)
        .pipe(
            retry(3),
            catchError(this.handleError)
          );
  }

  deleteUser(id: number): Observable<User> {
      return this.http.delete<User>(`${this.baseUrl}` + `/delete/` + id)
            .pipe(
              retry(3),
              catchError(this.handleError)  
            );
  }

  retrieveAllUsers(): Observable<User> {
      return this.http.get<User>(`${this.baseUrl}` + `/findall`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  retrieveUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}` + `/findbyid/` + id)
                  .pipe(
                    retry(3),
                    catchError(this.handleError)
                  );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
