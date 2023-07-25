import { TaskType } from './TaskType';

export class Task {
  id?: String | undefined;
  description?: String;
  taskType?: TaskType | null;
  specificFields?: { [key: string]: string | undefined} = {};
}
//   constructor(id: number, title: string, fields: string[], taskType: TaskType) {
//     this.id = id;
//     this.title = title;
//     this.fields = fields;
//     this.taskType = taskType;
//   }
