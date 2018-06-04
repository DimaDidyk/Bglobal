import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { MatMenuTrigger, MatMenuModule, MatDialog, MatDialogRef } from '@angular/material/';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

	constructor(public dialog: MatDialog) {}


	// open and close menu
	userMenuStaus = "hide";
	openMenu() {
		this.userMenuStaus = "show";
	}
	closeMenu() {
		this.userMenuStaus = "hide";
	}

	// header mobile menu
	status: boolean = false;
	clickSendwich(){
	    this.status = !this.status;       
	}

	// open sign in dialog
	openDialog() {
	    this.dialog.open(DialogSignIn);
	}

	// open sign in dialog
	openDialogMessage() {
	    this.dialog.open(DialogMessage);
	}

	// On init 
	ngOnInit() {
	}
}

// Sign in form dialog
@Component({
	selector: 'dialog-sign-in',
	templateUrl: 'dialog-sign-in.html',
	styleUrls: ['./dialog-sign-in.scss']
})
export class DialogSignIn {
	constructor( public dialogRef: MatDialogRef<DialogSignIn> ) { }
	// submit Sign in form
	onSubmit(signInForm: NgForm) {
		console.log( signInForm.value );
	}
	closeDialog() {
	    this.dialogRef.close();
	}
}


// Message dialog
@Component({
	selector: 'dialog-message',
	templateUrl: 'dialog-message.html',
	styleUrls: ['./dialog-message.scss']
})
export class DialogMessage {
	constructor( public dialogRef: MatDialogRef<DialogMessage> ) { }
	closeDialog() {
	    this.dialogRef.close();
	}
}