import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-row',
  templateUrl: './tech-row.component.html',
  styleUrls: ['./tech-row.component.css']
})
export class TechRowComponent implements OnInit {
  @Input() tech:Tech;
  @Output() outputClick:EventEmitter<Tech>;
  currentTech:Tech;
  constructor() {
    this.tech=new Tech("","");
    this.outputClick=new EventEmitter();
    this.currentTech=new Tech("","");
   }

   onClickEmit(tech:Tech):void{
     this.currentTech=tech;
     this.outputClick.emit(tech);
   }
   
  
  ngOnInit(): void {
  }

}
