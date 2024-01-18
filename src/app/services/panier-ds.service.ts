import { Injectable } from '@angular/core';
import DétailPanier from '../domaine/DétailPanier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ProduitPanier from '../domaine/ProduitPanier';

@Injectable({
  providedIn: 'root'
})
export class PanierDSService {

  constructor(
    private http :HttpClient
  ) { }

  add(iduser:number|null, idProduct:number){
    if(iduser==null) iduser=20;
    return this.http.get("http://34.116.154.163/cart/addProductToCart/"+iduser+"/"+idProduct+"/1")
  }
  getCart(iduser:number|null){
    return this.http.get<Array<ProduitPanier>>("http://34.116.154.163/cart/getCart/"+iduser)
  }

  changeQuantity(id:Number,n:Number):void{
  }

  getAll(){
    console.log("http://localhost:8084/api/cart/user/"+localStorage.getItem("id"))
    return this.http.get("http://localhost:8084/api/cart/user/"+localStorage.getItem("id"));
  }
}
