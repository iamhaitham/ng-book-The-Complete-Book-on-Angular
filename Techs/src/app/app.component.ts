import { Component } from '@angular/core';
import { Tech } from './tech.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  techs:Tech[];
  
  constructor(){
    this.techs=[
      new Tech("Angular",'../../assets/images/angular.jpeg'),
      new Tech("ReactJS",'../../assets/images/reactjs.png'),
      new Tech("VueJS",'../../assets/images/vuejs.png')
    ]
  }

}
