import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skills } from '../models/skills.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
   skills: Skills = new Skills();
 
   constructor(public SkillsService: SkillsService) {
     
     this.SkillsService.getSkills().snapshotChanges().pipe(
       map(changes =>
         changes.map(c =>
           ({ id: c.payload.doc.id, ...c.payload.doc.data() })
         )
       )
     ).subscribe(data => {
       this.skills = data[0];
       console.log('Datos de skills:', this.skills); // Aquí se imprimen los datos de skills
     });
     
   }
    
}
 
