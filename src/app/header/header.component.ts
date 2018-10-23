import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { MatMenuTrigger, MatMenuModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgForm } from '@angular/forms';

import { HttpService } from '../services/http.service';
import { UserDataLogin } from "../entity/User";
import { DialogMessageData } from "../entity/Dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

	constructor(
		public dialog: MatDialog,
        private httpService: HttpService,
	){}


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
	openDialogLogIn() {
	    this.dialog.open(DialogSignIn);
	}

	// open sign in dialog
	openDialogMessage(DialogMessageData) {
	    this.dialog.open(DialogMessage, {
			data: DialogMessageData,
	    });	
	}

	// On init 
	ngOnInit() {}
}

// Message dialog
@Component({
	selector: 'dialog-message',
	templateUrl: 'dialog-message.html',
	styleUrls: ['./dialog-message.scss']
})
export class DialogMessage{
	constructor(
		public dialogRef: MatDialogRef<DialogMessage>,
		@Inject(MAT_DIALOG_DATA) public data: any,
	){}

	closeDialog() {
	    this.dialogRef.close();
	}
}


// Sign in form dialog
@Component({
	selector: 'dialog-sign-in',
	templateUrl: 'dialog-sign-in.html',
	styleUrls: ['./dialog-sign-in.scss']
})
export class DialogSignIn {
	constructor( 
		public dialogRef: MatDialogRef<DialogSignIn>,
		private httpService: HttpService,
	){}

	userDataLogin:UserDataLogin = new UserDataLogin();
	error:string;

	// submit Sign in form
	onSubmit(signInForm: NgForm) {
		this.userDataLogin.Email = signInForm.value.login;
		this.userDataLogin.Password = signInForm.value.password;

		this.error = '';

		this.httpService.postDataLogin(this.userDataLogin).subscribe(
			(data) => {
				localStorage.setItem('tokenAuthorization', String(data));
				this.closeDialog();
			},
			(error) => {
				this.error = error.error.Message;
			}
		);
	}
	// close Dialog
	closeDialog() {
	    this.dialogRef.close();
	}
}

