import { Component } from '@angular/core';

/**
 * Composant HomeComponent (page d'accueil)
 * Gère l'affichage initial et le nombre d'éléments
 */
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Nombre d'éléments à afficher dans le template
  nbItems: number = 4;
}