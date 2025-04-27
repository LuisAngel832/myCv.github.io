import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';

import { map } from 'rxjs';
import { certificates } from '../models/certificates.mocel';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates :certificates[] = [];
  
    constructor(public CertificatesService: CertificatesService){
      this.CertificatesService.getCertificate().snapshotChanges().pipe(
        map((changes: any[]) =>
          changes.map(change =>
            ({ id: change.payload.doc.id, ...change.payload.doc.data() })
          )
        )
      ).subscribe(data => {
        this.certificates = data;
        console.log('Datos de educación:', this.certificates); // Aquí se imprimen los datos de educación
      }
      )
}
}
