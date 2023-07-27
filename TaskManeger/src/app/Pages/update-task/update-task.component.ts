import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskType } from 'src/app/Models/TaskType';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';
import { TaskTypeService } from 'src/app/Services/task-type.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  constructor(
    private TasksServices: JavaSpringBootServiceService,
    private taskTypeServcie: TaskTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: String = '';
  task: Task = {};
  taskTypes: TaskType[] = [];
  specificFieldsArray: { key: string; value: string }[] = [];
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
        if (this.task && this.task.specificFields) {
          this.specificFieldsArray = Object.entries(
            this.task.specificFields
          ).map(([key, value]) => ({ key, value: value || '' }));
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  updateTask() {
    console.log('task', this.task);

    this.TasksServices.UpdateTask(this.id, this.task).subscribe(
      (Data) => {
        console.log(Data);
        this.router.navigate(['/tasks']);
        // this.ngOnInit();
      },
      (err) => {
        console.log(err);
        alert(err.error);
      }
    );
  }

  // Function to update the specific field key and value
  updateSpecificField(fieldIndex: number, newKey: string, newValue: string) {
    if (fieldIndex >= 0 && fieldIndex < this.specificFieldsArray.length) {
      const oldKey = this.specificFieldsArray[fieldIndex].key;
      this.specificFieldsArray[fieldIndex] = { key: newKey, value: newValue };

      if (this.task?.specificFields) {
        if (oldKey !== newKey) {
          // If the key has changed, delete the old key-value pair from the task object
          delete this.task.specificFields[oldKey];
        }

        // Update the task object with the new key-value pair
        this.task.specificFields[newKey] = newValue;
      }
    }
  }

  // Function to remove a specific field
  removeSpecificFieldsData(fieldIndex: number) {
    if (fieldIndex >= 0 && fieldIndex < this.specificFieldsArray.length) {
      const keyToRemove = this.specificFieldsArray[fieldIndex].key;
      this.specificFieldsArray.splice(fieldIndex, 1); // Remove the element from the array

      if (this.task?.specificFields) {
        delete this.task.specificFields[keyToRemove]; // Remove the key-value pair from the task object
      }
    }
  }
  
}
