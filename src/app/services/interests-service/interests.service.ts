import { Injectable } from '@angular/core';
import { Interest } from '../../models/interest.mocel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class InterestsService {
 
   private dbPath = '/Interest';
 
   InterestRef: AngularFirestoreCollection<Interest>;
 
   constructor(private db: AngularFirestore) {
     this.InterestRef = db.collection(this.dbPath);
   }
 
   getInterest(): AngularFirestoreCollection<Interest> {
     return this.InterestRef;
   }
}
 
