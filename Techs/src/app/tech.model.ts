export class Tech{
    name:string;
    image:string;
    votes:number;

    constructor(name:string,image:string,votes?:number){
        this.name=name;
        this.image=image;
        this.votes=votes||0;
    }

    voteUp():void{
        this.votes+=1;
    }
    
    voteDown():void{
        this.votes-=1;
    }
}