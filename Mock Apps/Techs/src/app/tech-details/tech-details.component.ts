import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Tech } from '../tech.model';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {
  @Input() tech:Tech;
  @HostBinding("attr.class") cssClass="imageSize";

  constructor() {
    this.tech=new Tech("","");
   }

   

  ngOnInit(): void {
  }

}
