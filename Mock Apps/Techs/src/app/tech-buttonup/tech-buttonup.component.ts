import { Component, Input, OnInit } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-buttonup',
  templateUrl: './tech-buttonup.component.html',
  styleUrls: ['./tech-buttonup.component.css']
})
export class TechButtonupComponent implements OnInit {
  @Input() tech:Tech;

  constructor() {
    this.tech=new Tech("","");
   }

  voteUp():boolean{
    this.tech.voteUp();
    return false;
  }

  ngOnInit(): void {
  }

}
