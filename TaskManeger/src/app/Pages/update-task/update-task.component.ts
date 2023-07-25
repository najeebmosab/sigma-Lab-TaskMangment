import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskType } from 'src/app/Models/TaskType';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';
import { TaskTypeService } from 'src/app/Services/task-type.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  constructor(
    private TasksServices: JavaSpringBootServiceService,
    private taskTypeServcie: TaskTypeService,
    private route: ActivatedRoute
  ) {}
  id: String = '';
  task: Task = {};
  taskTypes: TaskType[] = [];
  ngOnInit() {
    this.taskTypeServcie.GetTaskTypes().subscribe(
      (Data: any) => {
        this.taskTypes = Data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.route.params.subscribe((params) => {
      this.id = params['id']; // 'id' should match the parameter name defined in the router
      console.log('ID:', this.id);
    });
    this.TasksServices.GETOneTasks(this.id).subscribe(
      (Data: Task) => {
        console.log('DATA', Data);
        this.task = Data;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  updateTask() {
    this.TasksServices.UpdateTask(this.id,this.task).subscribe(
      (Data)=>{console.log(Data);
        this.ngOnInit();
      },
      (err)=>{console.log(err);
      }
      );
  }
}
