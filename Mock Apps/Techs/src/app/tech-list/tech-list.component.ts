import { Component, Input,HostBinding, OnInit } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {
  @Input() techs:Tech[];
  @HostBinding("attr.class") cssClass="allPage";
  currentTech:Tech;

  constructor() {
    this.techs=[];
    this.currentTech=new Tech("","");
   }

  outputAction(tech:Tech):void{
    this.currentTech=tech;
    console.log(this.currentTech);
  }

  isSelectedFunction(tech:Tech):boolean{
    if(!tech || !this.currentTech){
      return false;
    }
    return this.currentTech===tech;
  }

  ngOnInit(): void {
  }

}
