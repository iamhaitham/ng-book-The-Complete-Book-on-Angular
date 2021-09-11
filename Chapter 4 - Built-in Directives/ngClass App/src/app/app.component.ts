import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBordered : boolean;
  myClasses : Record<string,boolean>;
  isBlue:boolean;
  isRounded:boolean;
  isBlueisRounded:string[];
  index:number;

  constructor(){
    this.isBordered = false;
    this.myClasses = {};
    this.isBlue=false;
    this.isRounded=true;
    this.isBlueisRounded=[];
    this.index=-1;
  }

  setToggleClasses() : boolean{
    this.isBordered = !this.isBordered;
    this.myClasses = {
      "toggleBorder" : this.isBordered,
    }
    return false;
  }

  changeIsBlueIsRound(className:string):void{
    this.index=this.isBlueisRounded.indexOf(className);
    if(this.index>-1){
      this.isBlueisRounded.splice(this.index,1);
    }else{
      this.isBlueisRounded.push(className);
    }
  }


 
}
