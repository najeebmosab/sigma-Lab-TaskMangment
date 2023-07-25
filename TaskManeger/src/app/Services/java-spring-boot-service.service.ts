import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/Tasks';

@Injectable({
  providedIn: 'root',
})
export class JavaSpringBootServiceService {
  private baseUrl = 'http://localhost:8083/tasks';
  constructor(private http: HttpClient) {}

  GETTasks() {
    return this.http.get(this.baseUrl).pipe();
  }

  GETOneTasks(id: String) {
    return this.http.get(this.baseUrl + '/' + id).pipe();
  }

  AddTask(obj: Task) {
    return this.http.post(this.baseUrl,obj).pipe();
  }
  DeleteTask(id:String){
    return this.http.delete(this.baseUrl+"/"+id).pipe();
  }

  UpdateTask(id:String,obj:any){
    return this.http.put(this.baseUrl+"/"+id,obj).pipe();
  }
}
