import { Injectable } from '@angular/core';
import { Goal } from './goal.interface';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  toDoGoals:Goal[];
  doingGoals:Goal[];

  constructor() {
    this.toDoGoals=[];
    this.doingGoals=[];
   }

  addToDo(goal:any):void{
    this.toDoGoals.push({'goalName':goal,'goalStatus':'to-do'});
  }

  moveToDoing(goal:Goal):void{
    const startIndex=this.toDoGoals.indexOf(goal);
    this.toDoGoals.splice(startIndex,1);
    this.doingGoals.push(goal);
  }

  finishGoal(goal:Goal):void{
    const startIndex=this.doingGoals.indexOf(goal);
    this.doingGoals.splice(startIndex,1);
  }

}
