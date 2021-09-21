import { Component, OnInit } from '@angular/core';
import { Goal } from '../services/goal.interface';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  constructor(public goalService:GoalService) { 

  }

  finishGoal(goal:Goal):void{
    this.goalService.finishGoal(goal);
  }

  ngOnInit(): void {
  }

}
