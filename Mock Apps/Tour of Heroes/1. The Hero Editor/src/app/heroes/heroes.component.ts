import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero;

  constructor() {
    this.hero = {
      'id':1,
      'name':'Windstorm'
    };

  }

  ngOnInit(): void {
  }

}
