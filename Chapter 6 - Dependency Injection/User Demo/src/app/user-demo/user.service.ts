import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    user:any;

    constructor(){}

    setUser(newUser:any){
        this.user=newUser;
    }

    getUser(){
        return this.user;
    }
    
}