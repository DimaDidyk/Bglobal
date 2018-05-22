import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger, MatMenuModule, MatDialog, MatDialogRef } from '@angular/material/';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})

export class InfoPageComponent implements OnInit {

	constructor(public dialog: MatDialog) {}

	// open update info dialog
	openDialog() {
	    this.dialog.open(DialogUpdateInfo);
	}

	ngOnInit() {}
}


// Update info dialog
@Component({
	selector: 'dialog-update-info',
	templateUrl: 'dialog-update-info.html',
	styleUrls: ['./dialog-update-info.scss']
})
export class DialogUpdateInfo {
	constructor( public dialogRef: MatDialogRef<DialogUpdateInfo> ) { }

	// validation
	emailPattern = "[^ @]*@[^ @]*";

	numberTel_keyPress(event: any) {
	    const pattern = /[0-9/+/ /(/)/]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}

	// close update info dialog
	closeDialog() {
	    this.dialogRef.close();
	}

	// submit Sign in form
	onSubmit(updateInfoForm: NgForm) {
		console.log( updateInfoForm.value );
		this.closeDialog();
	}
}