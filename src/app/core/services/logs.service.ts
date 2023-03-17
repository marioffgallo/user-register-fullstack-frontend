import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Log } from '../models/log.model';

/**
 * A service for managing logs making REST calls
 */
@Injectable({
  providedIn: 'root',
})
export class LogsService {
  private baseUrl = 'http://localhost:9192/api/database';

  constructor(private http: HttpClient) {}

  /**
   * Send a log to be created in the API
   *
   * @param {Log} log the log object
   * @returns {Log} Returns a log created on database with ID
   */
  public createLog(log: Log): Observable<Log> {
    return this.http
      .post<Log>(`${this.baseUrl}` + `/logs/create`, log)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Retrieve all logs from API
   *
   * @returns {Log[]} Returns a list of logs from the database
   */
  public retrieveAllLogs(): Observable<Log[]> {
    return this.http
      .get<Log[]>(`${this.baseUrl}` + `/logs`)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Send a id to retrieve a log in the API
   *
   * @param {number} id the id of the log
   * @returns {Log} Returns the user retrieved from database
   */
  public retrieveLog(id: number): Observable<Log> {
    return this.http
      .get<Log>(`${this.baseUrl}` + `/logs/` + id)
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
