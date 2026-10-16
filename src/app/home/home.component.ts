import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Composant HomeComponent (page d'accueil)
 * Gère l'affichage initial et le nombre d'éléments
 */
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Nombre d'éléments à afficher dans le template
  nbItems: number = 4;
  btnText: string = "Ajouter un item";
  objectifText : string = '';
}