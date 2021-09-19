import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})

@Injectable()
export class SimpleHttpComponent implements OnInit {
  data:Object;
  loading:boolean;
  catchedErrors:any;
  
  constructor(private http: HttpClient) {
    this.data={};
    this.loading=false;
   }

   makeRequest():void{
    this.loading=true;
    this.http
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .subscribe(
          (data)=>{
            this.data=data;
            this.loading=false;
          }
        ,(error)=>{
          this.catchedErrors=error;
          this.loading=false;
        });
      
   }

  ngOnInit(): void {
  }

}
