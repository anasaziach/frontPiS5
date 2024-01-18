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
  ngOnInit(): void {
  }

  @Input() produit!:Product;
  // @Output() productSelected = new EventEmitter<Product>();

  addNewItem() {
    const idString = localStorage.getItem("id");
    const idd = idString ? parseInt(idString) : null;
    this.pdss.add(idd , this.produit.id);
  }
}