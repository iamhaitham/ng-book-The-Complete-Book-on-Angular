import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?:Hero;

  constructor() { 
    this.hero={'id':0,'name':""};
  }

  ngOnInit(): void {
  }

}
