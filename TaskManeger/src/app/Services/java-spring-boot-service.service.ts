import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaSpringBootServiceService {
  private baseUrl = 'http://localhost:8083/tasks'; 
  constructor(private http: HttpClient) { }

  GETTasks()
  {
   return  this.http.get(this.baseUrl).pipe();
  }

  GETOneTasks(id:String)
  {
   return  this.http.get(this.baseUrl+"/"+id).pipe();
  }
}
