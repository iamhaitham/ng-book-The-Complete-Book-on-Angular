import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero?:Hero;

  constructor(private heroService:HeroService, private messageService: MessageService) {
    this.heroes=[];
    this.selectedHero={'id':0,'name':""};
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${this.selectedHero.id}`);
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe(
        (heroes)=>{
          this.heroes=heroes;
        }
      );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
