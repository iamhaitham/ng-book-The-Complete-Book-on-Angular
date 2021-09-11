import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choice: number;

  constructor() {
    this.choice=0;
  }

  nextChoice():void{
    this.choice+=1;
    if(this.choice>5){
      this.choice=1;
    }
  }

  ngOnInit() {
  }
}
