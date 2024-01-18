import { Component } from '@angular/core';
import Product from '../domaine/Product';
import { SupplyServiceService } from '../services/supply-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = new Product(0,"",0,true,"","","","",0);
  
  categories: String[] = []

  constructor(
    private suplyService : SupplyServiceService,
    private router: Router,
    private supplyService: SupplyServiceService
  ){
    this.supplyService.getCategories().subscribe(
      (response: String[]) => {
        this.categories = response;
        console.log(response)
      });
  }
  createProduct() {
    // Logic to handle the creation of a new product (e.g., send data to backend)
    this.suplyService.addProduct(this.product)
    .subscribe((res)=>{
      this.router.navigateByUrl("produits");
    })
  }
}
