export class PriceService{
    constructor(){

    }

    calculateTotalPrice(basePrice:number, state:string){
        const tax = Math.random();
        return basePrice+tax;
    }   
}