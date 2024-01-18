import { Injectable } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ProduitPanier from '../domaine/ProduitPanier';
import Order from '../domaine/Order';

@Injectable({
  providedIn: 'root'
})
export class PanierDSService {
  deleteCart(id:number|null) {
    return this.http.get("http://34.116.154.163/cart/delete/1?cartId="+id)
  }

  constructor(
    private http :HttpClient
  ) { }

  add(id:number|null, idProduct:number){
    if(id==null) id=20;
    return this.http.get("http://34.116.154.163/cart/addProductToCart/"+id+"/"+idProduct+"/1")
  }
  getCart(iduser:number|null){
    return this.http.get<Array<ProduitPanier>>("http://34.116.154.163/cart/getCart/"+iduser)
  }

  makeOrder(id:number|null){
    return this.http.get<Array<Order>>("/order/"+id+"/"+id)
  }

  getAll(){
    return this.http.get("http://localhost:8084/api/cart/user/"+localStorage.getItem("id"));
  }
}
