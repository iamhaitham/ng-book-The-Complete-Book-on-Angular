import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  taskName: AbstractControl;

  constructor(public taskService: TaskService, private fb: FormBuilder) {
    this.myForm = fb.group({
      taskName: [''],
    });
    this.taskName = this.myForm.controls['taskName'];
  }

  addTask(myFormValue: any): void {
    this.taskService.addTaskService(myFormValue.taskName);
    this.myForm.reset();
  }
}
