import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../domaine/Product';

@Injectable({
  providedIn: 'root'
})
export class SupplyServiceService {

  constructor(private http: HttpClient) { }
  
  

   getAllProducts(){
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json');
    return this.http.get(`http://34.116.154.163/products`);
    // return this.http.get(`http://localhost:8086/api/products/get`,{headers});
  }

  getCategories(){
    return this.http.get<Array<String>>(`http://34.116.154.163/products/getCategories`);
    // return this.http.get<Array<String>>(`http://localhost:8086/api/getCategories`);
  }

  getproductById(id:number){
    return this.http.get(`http://34.116.154.163/products/id/`+id);
    // return this.http.get<Array<Product>>(`http://localhost:8086/`+id);
  }

  getproductsByCat(category:String){
    return this.http.get(`http://34.116.154.163/products/category/`+category);
    // return this.http.get(`http://localhost:8086/api/products/category/`+category,{headers});
  }
  addProduct(product:Product){
    console.log(product)
    return this.http.get(`http://34.116.154.163/admin/products?title=`+product.title+`&price=`+product.price+`&description=`+product.description+`&category=`+product.category+`&disponibility=`+product.disponibility+`&availability=`+product.availability+`&imgUrl=`+product.imgUrl);
  }
  
}
