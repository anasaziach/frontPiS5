import { Component, OnInit } from '@angular/core';
import Product from '../domaine/Product';
import { SupplyServiceService } from '../services/supply-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ngOnInit(): void {
    this.getStock();
  }

  constructor(private supplyService: SupplyServiceService) { }
  products: Product[] = []
  categories: String[] = []
  panier: Product[] = []


  filter(category: string) {
    this.supplyService.getproductsByCat(category)
    .subscribe(
      (response: any) => {
        this.products = response;
      });
    
  }

  getStock(): void {
    this.supplyService.getAllProducts().subscribe(
      (response: any) => {
        console.log(response)
        this.products = response;
      });

    this.supplyService.getCategories().subscribe(
      (response: String[]) => {
        this.categories = response;
        console.log(response)
      });
    }

  ajouterProduit(p: Product) {
    this.panier.push(p)
    this.panier.forEach(element => {
      console.log(element.title);
    })
  }
}
