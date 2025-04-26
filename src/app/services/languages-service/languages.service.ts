import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../models/language.model'; 

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private dbPath = '/Languages';

  LanguageRef: AngularFirestoreCollection<Language>;

  constructor(private db: AngularFirestore) {
    this.LanguageRef = db.collection(this.dbPath);
  }

  getLanguage(): AngularFirestoreCollection<Language> {
    return this.LanguageRef;
  }
} 
 import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../models/language.model'; 

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private dbPath = '/Language';

  LanguageRef: AngularFirestoreCollection<Language>;

  constructor(private db: AngularFirestore) {
    this.LanguageRef = db.collection(this.dbPath);
  }

  getLanguage(): AngularFirestoreCollection<Language> {
    return this.LanguageRef;
  }
} 
 