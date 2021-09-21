import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../services/goal.interface';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(public goalService:GoalService) {
   }

   moveToDoing(goal:Goal):void{
    this.goalService.moveToDoing(goal);
   }

  ngOnInit(): void {
  }

}
