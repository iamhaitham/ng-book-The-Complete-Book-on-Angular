import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-dependency-injection',
  templateUrl: './with-dependency-injection.component.html',
  styleUrls: ['./with-dependency-injection.component.css']
})
export class WithDependencyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
