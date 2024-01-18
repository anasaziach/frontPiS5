import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../domaine/User';
import { LoginService } from '../services/login.service';
import userDetails from '../domaine/userDetails';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

constructor(
  private loginService:LoginService,
  private router: Router
  ){}

  user:User=new User("","","",new userDetails(12 , "" , ""));
  pwd2:String="";


register(form:NgForm){
  this.loginService.signUp(this.user)
  .subscribe((response:any)=>{
    console.log("response : "+response)
      document.cookie="loged=true"
      localStorage.setItem("id",response.id)
      this.router.navigateByUrl("produits")
    },
    (error)=>{
      document.cookie="loged="
      this.router.navigate([this.router.url])
    });
}

}
