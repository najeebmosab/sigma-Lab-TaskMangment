import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Models/Tasks';
import { JavaSpringBootServiceService } from 'src/app/Services/java-spring-boot-service.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private TasksServices: JavaSpringBootServiceService,private route: ActivatedRoute) {}
  id:String = "";
  task:Task = {};
  updateTaskForm!: FormGroup;
  ngOnInit(){

    this.updateTaskForm = this.formBuilder.group({
      description: [this.task?.description || '', Validators.required],
      taskType: [this.task?.taskType || null, Validators.required],
      specificFields: this.formBuilder.group(this.task?.specificFields || {}),
    });

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

  onSubmitUpdateTask(){
    console.log('====================================');
    console.log();
    console.log('====================================');


    if (this.updateTaskForm.valid) {
      const updatedTask = {
        id: this.task.id,
        description: this.updateTaskForm.value.description,
        taskType: this.updateTaskForm.value.taskType,
        specificFields: this.updateTaskForm.value.specificFields,
      };
    }
  }


}
