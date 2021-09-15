import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities:string[];
  people:Record<string,any>[];
  peopleByCity:Record<string,any>[];

  constructor(){
    this.cities=['Damascus','Jerusalem','Amman'];
    
    this.people=[{
      'name':'John Doe',
      'age':22,
      'city':this.cities[0]
    },
    {
      'name':'Jimmy Doe',
      'age':13,
      'city':this.cities[1]
    },
    {
      'name':'Jack Doe',
      'age':68,
      'city':this.cities[2]
    }];

    this.peopleByCity=[{
        'city':this.cities[0],
        people:[{
          'name':this.people[0]['name'],
          'age':this.people[0]['age']
      },{
        'name':'Jane Doe',
        'age':5
    }]
    },{
        'city':this.cities[1],
        people:[{
          'name':this.people[1]['name'],
          'age':this.people[1]['age']
      },{
        'name':'Kim Doe',
        'age':4
    }]
    }];
  }
}
