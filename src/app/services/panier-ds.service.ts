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
    // const headers = new HttpHeaders()
    //             .set('Cookie', iduser.toString());
    //             console.log(`http://34.116.154.163/cart?productId=`+idProduct+`&quantity=`+1)
    return this.http.get("http://34.116.154.163/cart/addProductToCart/"+iduser+"/"+idProduct+"/1")
  }
  getCart(iduser:number|null){
    return this.http.get<Array<ProduitPanier>>("http://34.116.154.163/cart/getCart/"+iduser)
  }

  changeQuantity(id:Number,n:Number):void{
    // let dp:any= this.panier.get(id);
    // dp.q=n;
    // this.panier.set(id,dp);
  }

  getAll(){
    console.log("http://localhost:8084/api/cart/user/"+localStorage.getItem("id"))
    return this.http.get("http://localhost:8084/api/cart/user/"+localStorage.getItem("id"));
  }
}
