import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { skuValidator } from './shared/sku-starter.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder){
    this.myForm=fb.group({
      'sku':['',[Validators.required,skuValidator(/^123/i)]]
    });
   
    this.sku=this.myForm.controls['sku'];
   
    this.sku.valueChanges.subscribe(
      (value:string)=>{
        console.log("Sku has changed to ",value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (value:string)=>{
        console.log("myForm has changed to ",value);
      }
    );

  } 

  onSubmit(myFormValue:any):void{
    console.log(myFormValue);
  }
}
