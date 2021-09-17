import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { skuValidator } from './shared/sku-validator.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;

  constructor(fb:FormBuilder){
    this.myForm=fb.group({
      'sku':['',Validators.compose([Validators.required,skuValidator(/^123/i)])]
    })
  }

  onSubmit(myFormValue:any):void{
    console.log(myFormValue);
  }
}
