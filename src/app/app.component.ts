import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Composants Standalone importés pour la vue principale
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

/**
 * Composant racine de l'application (AppComponent)
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Titre du projet
  title = 'ModuleAngularTP3';
}
