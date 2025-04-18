import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Language} from '../models/language.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages: Language[] = [];
  
    constructor(public LanguagesService: LanguagesService) {
      console.log(this.LanguagesService);
      
      this.LanguagesService.getLanguage().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.languages = data;
      });
    }
}
