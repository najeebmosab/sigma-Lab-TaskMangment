import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {
  private baseUrl = 'http://localhost:8083/taskTypes'; 
  constructor(private http: HttpClient) { }
  GetTaskTypes(){
    return  this.http.get(this.baseUrl).pipe();
  }
}
