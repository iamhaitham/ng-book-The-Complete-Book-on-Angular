import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  @Input() tasks: Record<string, any>[];

  constructor() {
    this.tasks = [];
  }

  moveToCompleted(task: any): void {
    task.status ? task.status = 0 : task.status = 1;
  }

  ngOnInit(): void {
  }

}
