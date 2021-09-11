import { Component, Input, OnInit } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-buttondown',
  templateUrl: './tech-buttondown.component.html',
  styleUrls: ['./tech-buttondown.component.css']
})
export class TechButtondownComponent implements OnInit {
  @Input() tech:Tech;

  constructor() {
    this.tech=new Tech("","");
   }

  voteDown():boolean{
    this.tech.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
