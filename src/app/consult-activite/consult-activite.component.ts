import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  imports: [],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.scss'
})
export class ConsultActiviteComponent {
  monVariableId: string = '';
  monVariableId2: string = '';

  constructor(private monParam: ActivatedRoute){
    this.monVariableId = monParam.snapshot.params['id'];
    //console.log(this.monVariableId);
    this.monVariableId2 = monParam.snapshot.params['id2'];

  }
}
