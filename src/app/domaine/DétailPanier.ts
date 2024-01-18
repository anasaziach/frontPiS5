import Product from "./Product";

export default class DétailPanier {
    id:number;
    idProduct:number;

    constructor(id:number,idProduct:number){
        this.id = id;
        this.idProduct = idProduct;
    }
    
}