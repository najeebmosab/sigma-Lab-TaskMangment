import { TaskType } from "./TaskType";

export class Task {
  id?: number | undefined;
  title?: string | undefined;
  fields?:String[] | undefined;
  taskType?:TaskType | undefined;

//   constructor(id: number, title: string, fields: string[], taskType: TaskType) {
//     this.id = id;
//     this.title = title;
//     this.fields = fields;
//     this.taskType = taskType;
//   }
  
}
