import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeProtectionGuard implements CanActivateChild {
  constructor(private router: Router,private lis:LoginService) { }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(!localStorage.getItem("id")){
        this.router.navigateByUrl("login");
        return false;
      }
      return true
  }
  
}
