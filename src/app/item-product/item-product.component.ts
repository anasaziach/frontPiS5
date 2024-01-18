import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import Product from '../domaine/Product';
import { PanierDSService } from '../services/panier-ds.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  constructor(private pdss: PanierDSService){}
  availability:String="disponible";
  ngOnInit(): void {
    if(!this.produit.availability) this.availability="pas en stock!"
  }

  @Input() produit!:Product;

  addNewItem() {
    const idString = localStorage.getItem("id");
    const idd = idString ? parseInt(idString) : null;
    this.pdss.add(idd , this.produit.id);
  }
}