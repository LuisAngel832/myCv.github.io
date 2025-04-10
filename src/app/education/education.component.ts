import { Component } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/eduacation.model';
import { map } from 'rxjs';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations :Education[] = [];

  constructor(public EducationService: EducationService){
    this.EducationService.getEducation().snapshotChanges().pipe(
      map(changes =>
        changes.map(change =>
          ({ id: change.payload.doc.id, ...change.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.educations = data;
      console.log('Datos de educación:', this.educations); // Aquí se imprimen los datos de educación
    }
    );
  }
}
 
