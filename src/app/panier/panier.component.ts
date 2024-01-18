import { Component, OnInit } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import { PanierDSService } from '../services/panier-ds.service';
import Product from '../domaine/Product';
import { SupplyServiceService } from '../services/supply-service.service';
import ProduitPanier from '../domaine/ProduitPanier';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{

  quantity:number=1;
constructor(
  private pdss:PanierDSService,
  private productService:SupplyServiceService
  ){}
  produits:ProduitPanier[]=[];
  produitsAfterTraitement:ProduitPanier[]=[];
  produitAchtes:ProduitPanier[]=[];
  Ids:number[]=[];

  ngOnInit(): void {
    this.getItemsOnCart();
  }
  getItemsOnCart(){
    const idString = localStorage.getItem("id");
    const idUser = idString ? parseInt(idString) : null;
    this.pdss.getCart(idUser)
    .subscribe((response:ProduitPanier[])=>{
      this.produits = response
    })
    .add(()=>{
      this.produits = this.consolidateProducts(this.produits)
      console.log(this.produits)
      this.produits.map((element)=>{
        element.subTotal = element.quantity*element.product.price;
        // const storedCartItem = localStorage.getItem('cartItem');
        // if (storedCartItem) {
        //   const parsedCartItem = JSON.parse(storedCartItem);
        //   localStorage.removeItem('cartItem')
        //   quantity += parsedCartItem.quantity +1;
        // } else {
        //   console.log('No cart item found in localStorage.');
        // }
      })
    })
  }
  consolidateProducts(products: ProduitPanier[]): ProduitPanier[] {
    const productMap = new Map<number, ProduitPanier>();
    products.forEach(item => {
      const { quantity, subTotal, product } = item;
  
      if (product) {
        const { id: productId } = product;
  
        if (!productMap.has(productId)) {
          productMap.set(productId, { ...item });
        } else {
          const existingProduct = productMap.get(productId);
  
          if (existingProduct) {
            existingProduct.quantity += quantity;
            existingProduct.subTotal += subTotal;
          } else {
            console.error('Existing product is undefined.');
          }
        }
      } else {
        console.error('Product is undefined.');
      }
    });
  

    return Array.from(productMap.values());
  }
  show(){
    for(let element in this.Ids){
      this.productService.getproductById(parseInt(element))
      .subscribe((response:any)=>{
        console.log(response)
        this.produits = response
      })
    }
  }
  deleteAction() {
    throw new Error('Method not implemented.');
  }

  qChange(id:String,x:String):void{
    this.pdss.changeQuantity(Number(id),Number(x));
  }
  // getAll(){
    
    
  // }

buyAction():void{
  this.produitAchtes = this.produits;
  this.produits=[]
}

prixT(x:number,y:string):number{
  return x*Number(y);
}

}
