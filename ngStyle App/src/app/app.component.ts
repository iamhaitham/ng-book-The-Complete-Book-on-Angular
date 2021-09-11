import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenStyles:any;

  constructor(){
    this.chosenStyles={
        "color":"black",
        "background-color":"white",
        "font-size":"16px",
    };
  }

  applyChanges(
    textColor:HTMLInputElement,
    bgColor:HTMLInputElement,
    textSize:HTMLInputElement):boolean{
      this.chosenStyles={
        "color":textColor.value,
        "background-color":bgColor.value,
        "font-size":textSize.value+"px",
    };
    return false;
  }

}
