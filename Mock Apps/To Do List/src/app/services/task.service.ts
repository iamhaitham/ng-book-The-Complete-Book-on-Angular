import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Record<string, any>[];

  constructor() {
    this.tasks = [];
  }

  addTaskService(myFormValue: any): void {
    this.tasks.push({
      'id': Math.round((Math.random()*100)+(Math.random()*3)), // This is just a random id so 3 and 100 don't refer to anything!
      'name': myFormValue,
      'status': 0
    })
  }
}
