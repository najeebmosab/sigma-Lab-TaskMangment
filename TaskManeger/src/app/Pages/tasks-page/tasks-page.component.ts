import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { TaskType } from 'src/app/Models/TaskType';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';
import { TaskTypeService } from 'src/app/Services/task-type.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})
export class TasksPageComponent implements OnInit {
  task: Task = {
    description: '',
    taskType: undefined,
    specificFields: {},
  };
  taskTypes: TaskType[] = [];
  newSpecificFieldKey: string = '';
  newSpecificFieldValue: string = '';
  Tasks: Task[] = [];
  constructor(
    private taskTypeService: TaskTypeService,
    private taskSerive: JavaSpringBootServiceService
  ) {}

  ngOnInit(): void {
    this.getTaskTypes();
    this.getTasks();
  }

  getTasks() {
    this.taskSerive.GETTasks().subscribe(
      (Data: any) => {
        this.Tasks = Data;
        console.log('Tasks', this.Tasks);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTaskTypes(): void {
    this.taskTypeService.GetTaskTypes().subscribe((taskTypes: any) => {
      this.taskTypes = taskTypes;
    });
  }

  addSpecificField(): void {
    if (!this.task.specificFields) {
      return;
    }
    this.task.specificFields[this.newSpecificFieldKey] =
      this.newSpecificFieldValue;
    this.newSpecificFieldKey = '';
    this.newSpecificFieldValue = '';
  }

  createTask(): void {
    if (
      !this.task.description ||
      !this.task.specificFields ||
      !this.task.taskType
    ) {
      alert('task valid');
      return;
    }
    this.addSpecificField();
    this.taskSerive.AddTask(this.task).subscribe((response) => {
      this.ngOnInit();
    });
  }

  deleteTask(task:Task) {
    if (task.id !== undefined) {
      // Proceed with the delete logic...
      console.log(task.id);
      this.taskSerive.DeleteTask(task.id).subscribe(
        (Data) => {
          console.log(Data);
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // Handle the case where the taskId is undefined
    }
  }
}
