import { Injectable } from '@angular/core';
import { Certificate } from 'crypto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  accesoCertificates = 'certificates service running...';
  
    private dbPath = '/Certificates';
    certificateReg: AngularFirestoreCollection<Certificate>;
  
  
    constructor(private db: AngularFirestore) { 
      this.certificateReg = db.collection(this.dbPath)
    }
  
    getCertificate(): AngularFirestoreCollection<Certificate> {
      return this.certificateReg;
    }
}
