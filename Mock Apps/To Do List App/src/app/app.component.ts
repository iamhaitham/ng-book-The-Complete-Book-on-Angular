import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup
  
  constructor(private fb: FormBuilder, public taskService:TaskService){
    this.myForm=this.fb.group({
      'taskName':[''],
      'taskStatus':['']
    })
  }

  addTask(myFormValue:any):void{
    this.taskService.addTask(myFormValue);
  }


}
