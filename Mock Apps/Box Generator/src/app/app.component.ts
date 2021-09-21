import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxes:any

  constructor(){
    this.boxes=[];
  }

  onSubmit(formValue:any):void{
    this.boxes.push(formValue);
  }

}
