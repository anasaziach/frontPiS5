import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PanierComponent } from './panier/panier.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeProtectionGuard } from './home-protection.guard';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {
    path:"",component:NavComponentComponent,
  canActivateChild:[HomeProtectionGuard],
  children:[
    {path:"home",component:HomeComponent},
    {
      path:"addProduit",component:AddProductComponent
    },
    {
      path:"produits",component:ListProductComponent
    },
    {
      path:"produit/:id",component:DetailProduitComponent
    },
    {
      path:"panier",component:PanierComponent
    },
    {
      path:"addProduct",component:AddProductComponent
    }
  ]},
  {path:"login",component:AuthComponent},
  {path:"signup",component:UserFormComponent},
  {path:"**",component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
