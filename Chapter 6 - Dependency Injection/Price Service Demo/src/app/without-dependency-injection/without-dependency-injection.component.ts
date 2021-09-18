import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-dependency-injection',
  templateUrl: './without-dependency-injection.component.html',
  styleUrls: ['./without-dependency-injection.component.css']
})
export class WithoutDependencyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
