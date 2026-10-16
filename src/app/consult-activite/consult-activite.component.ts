import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult-activite',
  imports: [FormsModule],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.scss'
})
export class ConsultActiviteComponent {
  monVariableId: string = '';
  monVariableId2: string = '';
  nomActivite: string = '';
  newNom: string = '';

  constructor(private monParam: ActivatedRoute, public monConsultActService: ActiviteService,
    private monRouter: Router) {

    this.monVariableId = monParam.snapshot.params['id'];
    //console.log(this.monVariableId);
    //this.monVariableId2 = monParam.snapshot.params['id2'];
    this.nomActivite = this.monConsultActService.objectifs[Number(this.monVariableId)]
  }

  supprimeElem(index: number) {
    this.monConsultActService.removeItem(index);
    this.monRouter.navigate(['/'])
  }

  saveElem() {
    this.monConsultActService.editItem(+this.monVariableId, this.newNom)
    this.nomActivite = this.newNom;
  }
}
