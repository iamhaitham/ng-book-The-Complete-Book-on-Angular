import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  isChecked:boolean;
  currentClasses=[];

  constructor(private taskService: TaskService) {
    this.tasks = [];
    this.isChecked=false;
  }

  checkBox(task:Task):void{
    task.taskStatus=!task.taskStatus;
  }

  
  
  ngOnInit(): void {}
}
