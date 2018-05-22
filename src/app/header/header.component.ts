import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

	constructor(public dialog: MatDialog, private http: HttpClient) {}



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

	// submit Sign in form
	onSubmit(signInForm: NgForm) {
		console.log( signInForm.value );
	}

	constructor() {}
}