import { Component, OnInit, ViewChild, Inject, Input,
	ElementRef, Renderer, HostListener } from '@angular/core';
import { MatMenuTrigger, MatMenuModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	constructor(public dialog: MatDialog) {}

	// open and close menu
	@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
	openMenu() {
		this.trigger.openMenu();
	}
	closeMenu() {
		this.trigger.closeMenu();
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
		console.log( this );
	}

	constructor() {}
}