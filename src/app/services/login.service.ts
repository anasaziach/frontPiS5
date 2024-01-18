import { Injectable } from '@angular/core';
import User from '../domaine/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http : HttpClient
  ) { }

  getCookie(cname:String):String {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  login(mail:String,pwd:String){
    console.log({
      "email":mail,
      "password":pwd
    })
    const headers = new HttpHeaders()
                .set('Content-Type', 'application/json');
      return this.http.get(`http://34.116.154.163/login/`+mail+"/"+pwd)
  }

  logout():void{
    document.cookie="loged="
    localStorage.removeItem("id")
    localStorage.removeItem("role")
  }

  logedStatus():boolean{
    return localStorage.getItem("id") ? true : false;
  }

  signUp(u:User){
    const headers = new HttpHeaders()
                .set('Content-Type', 'application/json');
      return this.http.get(`http://34.116.154.163/registration?userName=${u.userName}&email=${u.email}&userPassword=${u.userPassword}&active=1&role=${u.role}`)
  }
}
