import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

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
export class HomeComponent implements OnInit {
  constructor(private monActService: ActiviteService, private monRouter: Router) { }

  // Nombre d'éléments à afficher dans le template
  nbItems: number = 4;
  btnText: string = "Ajouter un item";
  objectifText: string = '';
  objectifs: string[] = [];
  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;
    //console.log('Router marcheeeeee', this.monRouter)

    setTimeout(() => {
      this.monRouter.navigate(['/about'])
    }, 2000);

  }
}