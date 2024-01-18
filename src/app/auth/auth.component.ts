import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../domaine/User';
import { LoginService } from '../services/login.service';
import userDetails from '../domaine/userDetails';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router,private service:LoginService) { }
  user:User=new User("","","",new userDetails(12 , "" , ""));
  errF=false;
  
  logo="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
  sideImg="https://www.officite.com/wp-content/uploads/sites/15/2021/05/estore-illustration.png"

register(userForm:NgForm):void{
  this.service.login(this.user.email,this.user.userPassword)
  .subscribe((res:any)=>{
    console.log(res)
        document.cookie="loged=true"
        localStorage.setItem("id",res.id)
        localStorage.setItem("role",res.role)
        localStorage.setItem("name",res.userName)
        this.errF=false
        this.router.navigateByUrl("produits");
    },
    (error)=>{
      document.cookie="loged="
      this.errF=true
      this.router.navigate([this.router.url])
    })
}
}
