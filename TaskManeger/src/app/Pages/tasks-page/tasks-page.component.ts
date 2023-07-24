import { Component, OnInit } from '@angular/core';
import { TaskType } from 'src/app/Models/TaskType';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})
export class TasksPageComponent implements OnInit {
  newTask = new Task();
  Tasks: Task[] = [];
  constructor(private TasksServices: JavaSpringBootServiceService) {}
  ngOnInit() {
    console.log('Tasks', this.Tasks);
    this.TasksServices.GETTasks().subscribe(
      (Data: any) => {
        this.Tasks = Data;
        console.log("Tasks after Data",this.Tasks);
        
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  onSubmit() {
    // Here, you can implement the logic to handle the form submission
    // For example, you can send the newTask object to a service for task creation
  }
}
