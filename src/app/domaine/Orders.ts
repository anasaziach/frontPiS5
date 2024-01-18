import Order from "./Order";

export default class Orders{
    order : Order;
    numberItems:number=0;

    constructor(order : Order){
        this.order=order;
        order.items.map(()=>{
            this.numberItems+=1;
        })
    }
}