import { Component } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interest } from '../models/interest.mocel';
import { map } from 'rxjs';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  
    interest: Interest[] = [];
  
    constructor(public InterestsService: InterestsService) {
      
      this.InterestsService.getInterest().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.interest = data;
        
      });
  
  
      
    }
}
 
