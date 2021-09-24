import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  x: AbstractControl;
  y: AbstractControl;
  result: number;
  options: string[];
  chosenOperation: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      x: [''],
      y: [''],
    });
    this.x = this.myForm.controls['x'];
    this.y = this.myForm.controls['y'];
    this.result = 0;
    this.options = ["( + )", "( - )", "( * )", "( / )"];
    this.chosenOperation = "";
  }

  chooseOperation($event: any): void {
    this.chosenOperation = $event.target.value;
    if (this.chosenOperation == this.options[0]) {
      this.result = Number(this.x.value) + Number(this.y.value);
    } else if (this.chosenOperation == this.options[1]) {
      this.result = this.x.value - this.y.value;
    } else if (this.chosenOperation == this.options[2]) {
      this.result = this.x.value * this.y.value;
    } else if (this.chosenOperation == this.options[3]) {
      this.result = this.x.value / this.y.value;
    } else {
      this.result = 0;
    }
  }

  ngOnInit() {

  }



}
