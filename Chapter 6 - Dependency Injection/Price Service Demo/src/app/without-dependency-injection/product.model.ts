import { PriceService } from "./price.service";

export class Product{
    basePrice:number;
    service:PriceService;

    constructor(basePrice:number){
        this.service=new PriceService();
        this.basePrice=basePrice;
    }

    totalPrice(state:string){
        return this.service.calculateTotalPrice(this.basePrice,state);
    }
}