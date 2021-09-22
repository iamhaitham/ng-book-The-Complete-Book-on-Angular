import { isNgTemplate } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  toDoTasks: Task[];

  constructor() {
    this.toDoTasks = [];
  }

  addTask(receivedTask: Task): void {
    this.toDoTasks.push({
      taskName: receivedTask.taskName,
      taskStatus: false,
    });
  }
}
