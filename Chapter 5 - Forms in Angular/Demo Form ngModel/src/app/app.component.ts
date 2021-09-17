import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;
  myProductName:string;

  constructor(fb:FormBuilder){
    this.myForm=fb.group({
      'productName':['',Validators.required]
    });
    this.myProductName = "ng-book: The Complete Guide to Angular";
  }

  onSubmit(value:string):void{
    console.log("You have submitted",value);
  }
}
