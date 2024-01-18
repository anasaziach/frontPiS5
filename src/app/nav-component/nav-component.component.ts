import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent {
  constructor(private router: Router,private lis:LoginService) { 
    this.router.navigateByUrl("/produits");
  }
  role:String|null = localStorage.getItem("role");
  logo="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
  name:String|null = localStorage.getItem("name")

logout():void{
  this.lis.logout()
}
}
