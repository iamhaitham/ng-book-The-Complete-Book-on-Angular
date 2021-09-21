import { Component } from '@angular/core';
import { Goal } from './services/goal.interface';
import { GoalService } from './services/goal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goalToBeAdded:any;

  constructor(public goalService:GoalService){

  }

  onSubmit(goal:Goal):void{
    this.goalService.addToDo(goal);
    this.goalToBeAdded="";
  }
}
