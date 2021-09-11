import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-votes',
  templateUrl: './tech-votes.component.html',
  styleUrls: ['./tech-votes.component.css']
})
export class TechVotesComponent implements OnInit {
  @Input() tech:Tech;
  @HostBinding("attr.class") cssClass="votesSize";
  
  constructor() { 
    this.tech=new Tech("","");
  }

  ngOnInit(): void {
  }

}
