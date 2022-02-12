import { hasMethod} from "./interface.js"


export class Payment implements hasMethod{
    client: string;
    detail: string;
    amount: number;
    constructor(client:string, detail:string, amount:number){
    this.client = client;
    this.detail = detail;
    this.amount = amount;
}


display(){
    return  `${this.client} is owned $${this.amount} for ${this.detail}`
}

}