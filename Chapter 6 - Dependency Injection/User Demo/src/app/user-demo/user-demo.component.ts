import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
  providers:[
    UserService
  ]
})
export class UserDemoComponent implements OnInit {
  userName:string;

  constructor(private userService:UserService) {
    this.userName="";
   }

   signIn():void{
     this.userService.setUser({
       'name':'Nate Murray',
     });
     this.userName=this.userService.getUser().name;
     console.log("User name is ",this.userName);
   }

  ngOnInit(): void {
  }

}
