import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DétailPanier from '../domaine/DétailPanier';
import Product from '../domaine/Product';
import { PanierDSService } from '../services/panier-ds.service';
import { SupplyServiceService } from '../services/supply-service.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit{
  id:number=0;
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.supplyService.getproductById(this.route.snapshot.params['id']).subscribe(
        (res: any)=>{
          this.produit=res
          this.l=true        
        }
      )
  }

  constructor(
    private supplyService:SupplyServiceService,
    private route:ActivatedRoute,
    private pdss: PanierDSService
  ){}
  produit:any=undefined;
  l=false

  addNewItem() {
    // id is the id of the product
    const idString = localStorage.getItem("id");
    // idd is the id of the user
    const idUser = idString ? parseInt(idString) : null;
    var quantity = 1;
    if (localStorage.getItem(this.id.toString())) {
      const storedValue = localStorage.getItem(this.id.toString());
      const incrementedValue = parseInt(storedValue!.toString(), 10) + 1;
      localStorage.setItem(this.id.toString(), incrementedValue.toString());
    } else {
      console.log('No cart item found in localStorage.');
    }
    this.pdss.add(idUser,this.id)
    .subscribe((res)=>{
      const cartItem = { idProduct: this.id, quantity: quantity };
      localStorage.setItem('cartItem', JSON.stringify(cartItem));
    });
  }
}