import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Education } from '../../models/eduacation.model';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  accesoEducationService = "education service running";

  private dbPath = '/Education';
  EducationRef: AngularFirestoreCollection<Education>;


  constructor(private db: AngularFirestore) { 
    this.EducationRef = db.collection(this.dbPath)
  }

  getEducation(): AngularFirestoreCollection<Education> {
    return this.EducationRef;
  }
} 
