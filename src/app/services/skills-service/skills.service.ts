import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills.model'; 

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  accesoWorkExperience = "Skills running...";

  private dbPath = '/Skills';

  SkillsRef: AngularFirestoreCollection<Skills>;

  constructor(private db: AngularFirestore) {
    this.SkillsRef = db.collection(this.dbPath);
  }

  getSkills(): AngularFirestoreCollection<Skills> {
    return this.SkillsRef;
  }
} 
 