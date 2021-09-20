import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[];

  constructor() {
    this.messages=[];
   }

   add(message:string):void{
     this.messages.push(message);
   }

   clear():void{
     this.messages=[];
   }
}
