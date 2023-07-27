import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskType } from '../Models/TaskType';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {
  private baseUrl = 'http://localhost:8083/taskTypes'; 
  constructor(private http: HttpClient) { }
  GetTaskTypes(){
    return  this.http.get(this.baseUrl).pipe();
  }

  deleteTaskType(id:String){
    return  this.http.delete(this.baseUrl+"/"+id).pipe();
  }
  updateTaskType(obj:TaskType){
    return  this.http.put(this.baseUrl+"/"+obj.id,obj).pipe();
  }

  addTaskType(obj:TaskType){
    return  this.http.post(this.baseUrl,obj).pipe();
  }

}
