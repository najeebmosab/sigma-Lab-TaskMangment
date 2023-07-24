import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {

  constructor(private TasksServices: JavaSpringBootServiceService,private route: ActivatedRoute) {}
  id:String = "";
  task:Task = {};
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id']; // 'id' should match the parameter name defined in the router
      console.log('ID:', this.id); 
    });
    this.TasksServices.GETOneTasks(this.id).subscribe(
      (Data:Task)=>{console.log("DATA",Data);this.task = Data},
      (err)=>{console.log("err",err);
      }
    )
  }
}
