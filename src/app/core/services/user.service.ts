import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';

/**
 * A service for managing users making REST calls
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:9191/api/database';

  constructor(private http: HttpClient) {}

  /**
   * Retrieve all users from API
   *
   * @returns {User[]} Returns a list of users from the database
   */
  public retrieveAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}` + `/users`)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Send a id to retrieve a user in the API
   *
   * @param {number} id the id of the user
   * @returns {User} Returns the user retrieved from database
   */
  public retrieveUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}` + `/users/` + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Send a user to be created in the API
   *
   * @param {User} user the user object
   * @returns {User} Returns a user created on database with ID
   */
  public createUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}` + `/create`, user)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Send a user to be updated in the API
   *
   * @param {User} user the user object
   * @returns {User} Returns the user updated on the database
   */
  public updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.baseUrl}` + `/update/` + user.id, user)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Send a id to delete a user in the API
   *
   * @param {number} id the id of the user
   * @returns Returns nothing, only the HTTP 204 code of success
   */
  public deleteUser(id: number): Observable<any> {
    return this.http
      .delete<User>(`${this.baseUrl}` + `/delete/` + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Handles the errors from API calls
   *
   * @param {HttpErrorResponse} error the error received
   * @returns Return a throwError in the client console
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
