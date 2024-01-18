import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { PanierComponent } from './panier/panier.component';
import { SupplyServiceService } from './services/supply-service.service';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierDSService } from './services/panier-ds.service';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HomeProtectionGuard } from './home-protection.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  //composantes
  declarations: [
    AppComponent,
    ItemProductComponent,
    ListProductComponent,
    PanierComponent,
    DetailProduitComponent,
    AuthComponent,
    NotFoundComponent,
    HomeComponent,
    NavComponentComponent,
    UserFormComponent,
    AddProductComponent
  ],
  //les modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  //contient des services, 1er framework à utiliser l'InjDép
  providers: [
    SupplyServiceService,
    PanierDSService
  ],
  //indique composante de démarrage
  bootstrap: [AppComponent]
})
export class AppModule { }
