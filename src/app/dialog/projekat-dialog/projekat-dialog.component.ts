import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjekatService } from 'src/app/services/projekat.service';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
         public dialogRef: MatDialogRef<ProjekatDialogComponent>,
         @Inject(MAT_DIALOG_DATA)
         public data: any,
         public projekatService: ProjekatService) { }


         public add(): void {
           this.projekatService.addProjekat(this.data);
           this.snackBar.open('Uspesno dodat projekat' + this.data.naziv, 'Uredu', {
             duration: 3000
           });
         }

         public update(): void {
           this.projekatService.updateProjekat(this.data);
           this.snackBar.open('Uspesno azuriran projekat ' + this.data.naziv, 'Uredu', {
             duration: 3000
           });
         }

         public delete(): void {
           this.projekatService.deleteProjekat(this.data.id);
           this.snackBar.open('Uspesno obrisan projekat ' + this.data.id, 'Uredu', {
             duration: 3000
           });
         }

         public cancel(): void {
           this.dialogRef.close();
           this.snackBar.open('Odustali ste', 'Uredu', {
             duration: 3000
           });
         }


  ngOnInit(): void {
  }

}
