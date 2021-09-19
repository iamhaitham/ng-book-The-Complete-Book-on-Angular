import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})

@Injectable()
export class MoreHttpRequestsComponent implements OnInit {
  loading:boolean;
  data:Object;
  postError:Object;
  success:string;

  constructor(private http: HttpClient) {
    this.loading=false;
    this.data={};
    this.postError={};
    this.success="";
   }  
  
   makePost():void{
     this.loading=true;
     this.http
        .post(
          'https://jsonplaceholder.typicode.com/posts',
          JSON.stringify({
            body:'boo',
            title:'far',
            userId:55
          })
          ).subscribe(
            data=>{
              this.data=data;
              this.loading=false;
              this.success="Post request was handled successfully!";
            }
          , error=>{
              this.postError=error;
              this.loading=false;
          })
   }

  ngOnInit(): void {
  }

}
