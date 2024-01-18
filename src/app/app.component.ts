import { Component } from '@angular/core';
import Product from './domaine/Product';

@Component({
  selector: 'app-root',
  // on peut insérer html directement, mais utilise uniquement template
  templateUrl: './app.component.html',
  //on peut utiliser style directement
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //attribut publique
  title = 'productManager';
}


// {{x}} : string interpolation: liaison de données