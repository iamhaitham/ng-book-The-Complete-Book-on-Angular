import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myForm:FormGroup;

  constructor(fb: FormBuilder){
    this.myForm=fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(skuFormValue:string):void{
    console.log("You have submitted ",skuFormValue);
  }
}
