import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Log } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private baseUrl = 'http://localhost:9192/api/database';

  constructor(private http: HttpClient) { }

  /**
   * Do a posting 
   * @param user
   */
  createLog(log: Log): Observable<Log> {
      return this.http.post<Log>(`${this.baseUrl}` + `/logs/create`, log)
                  .pipe(
                    retry(3),
                    catchError(this.handleError)
                  );
  }

  retrieveAllLogs(): Observable<Log[]> {
      return this.http.get<Log[]>(`${this.baseUrl}` + `/logs`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  retrieveLog(id: number): Observable<Log> {
    return this.http.get<Log>(`${this.baseUrl}` + `/logs/` + id)
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
