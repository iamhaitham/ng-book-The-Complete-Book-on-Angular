import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HEROES } from '../mock-heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero?:Hero;

  constructor() {
    this.heroes=HEROES;
    this.selectedHero={'id':0,'name':""};
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  ngOnInit(): void {
  }

}
