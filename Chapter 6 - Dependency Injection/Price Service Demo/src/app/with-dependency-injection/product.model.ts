import { IPriceService } from "./price-service.interface";

export class Product{
    service:IPriceService;
    basePrice:number;

    constructor(service:IPriceService,basePrice:number){
        this.service=service;
        this.basePrice=basePrice;
    }

    totalPrice(state:string):number{
        return this.service.calculateTotalPrice(this.basePrice,state);
    }
}