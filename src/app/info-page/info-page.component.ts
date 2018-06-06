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
	openDialogUserInfo() {
	    this.dialog.open(DialogUpdateUserInfo);
	}
	openDialogCardInfo() {
	    this.dialog.open(DialogUpdateCardInfo);
	}

	ngOnInit() {}
}


// Update info dialog
@Component({
	selector: 'dialog-update-user-info',
	templateUrl: 'dialog-update-user-info.html',
	styleUrls: ['./dialog-update-user-info.scss']
})
export class DialogUpdateUserInfo {
	constructor( public dialogRef: MatDialogRef<DialogUpdateUserInfo> ) { }

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

// Update card dialog
@Component({
	selector: 'dialog-update-card-info',
	templateUrl: 'dialog-update-card-info.html',
	styleUrls: ['./dialog-update-card-info.scss']
})
export class DialogUpdateCardInfo implements OnInit{
	constructor( public dialogRef: MatDialogRef<DialogUpdateCardInfo> ) { }

	// month and year card
	months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	currentYear = (new Date()).getFullYear();
	year = [];
	ngOnInit() {
		for (var i = 0; i < 5; i++) {
			this.year[i] = this.currentYear++;
		}
	}

	// number keyPress
	number_keyPress(event: any) {
	    const pattern = /[0-9]/;
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
	onSubmit(updateCardInfoForm: NgForm) {
		console.log( updateCardInfoForm.value );
		this.closeDialog();
	}
}