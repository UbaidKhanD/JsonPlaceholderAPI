import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { TodoData } from './todo-data';
import { throwError } from 'rxjs/internal/observable/throwError';
import { DemoAPI } from './demo-api';


@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(public myhttp: HttpClient) { }
  getTodo(): Observable<any[]> {
    return this.myhttp.get<TodoData[]>(this.apiUrl + "https://jsonplaceholder.typicode.com/posts").pipe(catchError(this.errorHandler));
  }

  addPost(postData: any): Observable<any> {
    debugger;
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    alert(this.apiUrl + 'post/Create');
    return this.myhttp.post<any>(this.apiUrl +  postData, httpOptions);
  


  }

  gettodoByID(id: number): Observable<any> {
    return this.myhttp.get<TodoData>(this.apiUrl + "https://jsonplaceholder.typicode.com/posts" + id).pipe(catchError(this.errorHandler))
  }

  updatetodo(todo: TodoData): Observable<TodoData> {
    return this.myhttp.put<TodoData>(this.apiUrl + "https://jsonplaceholder.typicode.com/posts" + todo.id, JSON.stringify(todo), this.httpOptions).pipe(catchError(this.errorHandler))
  }


  removeUser(id: number) {
    return this.myhttp.delete<TodoData>(this.apiUrl + "https://jsonplaceholder.typicode.com/posts" + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: {
    error: {
      message: string;
    }; status: any; message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
