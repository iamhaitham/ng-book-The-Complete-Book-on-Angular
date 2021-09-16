import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;
  
  constructor(fb: FormBuilder) {
    this.myForm=fb.group({
      'sku':['',Validators.required]
    });
   }

   onSubmit(value:string):void{
     console.log(value)
   }

}
