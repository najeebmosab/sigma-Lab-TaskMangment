import { TaskType } from './TaskType';

export class Task {
  description?: String;
  id?: number;
  taskType?:TaskType
  specificFields?: { [key: string]: string };

  //   constructor(id: number, title: string, fields: string[], taskType: TaskType) {
  //     this.id = id;
  //     this.title = title;
  //     this.fields = fields;
  //     this.taskType = taskType;
  //   }
}
