import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskType } from 'src/app/Models/TaskType';
import { TaskTypeService } from 'src/app/Services/task-type.service';

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css'],
})
export class TaskTypeComponent implements OnInit {
  taskTypes: TaskType[] = [];
  updateFormVisible: boolean = false;
  addFormVisible: boolean = false;
  updatedType: TaskType = { id: '', name: '' };
  newType: TaskType = { id: '', name: '' }; // New variable to store the new type

  constructor(
    private taskTypeService: TaskTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskTypeService.GetTaskTypes().subscribe((types: any) => {
      this.taskTypes = types;
      console.log(this.taskTypes);
    });
  }

  deleteTaskType(type: TaskType): void {
    // Call the service or API to delete the task type by id
    console.log(type);
    if (type?.id) {
      this.taskTypeService.deleteTaskType(type?.id).subscribe(
        () => (Data: any) => {
        
        },
        (err) => {
          console.log(err);
          if (err.status == 200) {
            this.taskTypes = this.taskTypes.filter((taskType) => taskType.id !== type.id);
          }
          else{
            alert("Error deleting");
          }
        }
      );
    }
  }

  updateTaskType(type: TaskType): void {
    // Show the update form and pre-fill the input field with the current type name
    this.updateFormVisible = true;
    this.updatedType.id = type.id;
    this.updatedType.name = type.name;
  }

  submitUpdate(): void {
    // Call the service or API to update the task type by id with the updatedType object
    if (this.updatedType.id && this.updatedType.name) {
      this.taskTypeService.updateTaskType(this.updatedType).subscribe(
        (Data:any) => {
          console.log('Updated successfully');
          // After successful update, hide the form and refresh the taskTypes list
          this.updateFormVisible = false;
          this.taskTypeService.GetTaskTypes().subscribe((types: any) => {
            this.taskTypes = types;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  cancelUpdate(): void {
    // Hide the update form and reset the updatedType object
    this.updateFormVisible = false;
    this.updatedType = { id: '', name: '' };
  }

 

  goToAddNewType(): void {
    // Hide the update form, show the add form, and reset the form data
    this.updateFormVisible = false;
    this.addFormVisible = true;
    this.newType = { id: '', name: '' };
  }
  submitAdd(): void {
    // Call the service or API to add the new task type using the newType object
    if (this.newType.name) {
      this.taskTypeService.addTaskType(this.newType).subscribe(
        (Data: any) => {
          console.log('Added successfully');
          // After successful addition, hide the form and refresh the taskTypes list
          this.addFormVisible = false;
          this.taskTypeService.GetTaskTypes().subscribe((types: any) => {
            this.taskTypes = types;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  cancelAdd(): void {
    // Hide the add form and reset the newType object
    this.addFormVisible = false;
    this.newType = { id: '', name: '' };
  }

}
