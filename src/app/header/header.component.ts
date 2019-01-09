import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuTrigger, MatMenuModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';
import { UserDataLogin, UserInfo } from "../entity/User";
import { DialogMessageData } from "../entity/Dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public httpService: HttpService,
    public router: Router
  ) { }

  // get user information
  getConfigUserInfo(): Observable<UserInfo[]> {
    return this.httpService.getUserInfo();
  }

  public userInfo = [];
  // On init 
  ngOnInit() {
    //if (this.httpService.checkLogin()) {
    //  this.getConfigUserInfo().subscribe(
    //    data => {
    //      // console.log( data );
    //      this.userInfo = data;
    //    },
    //    error => {
    //      console.log(error);
    //    },
    //  );
    //}
    this.login();
  }

  public login() {
    if (this.httpService.checkLogin()) {
      this.getConfigUserInfo().subscribe(
        data => {
          // console.log( data );
          this.userInfo = data;
        },
        error => {
          console.log(error);
        },
      );
    }
  }

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
  clickSendwich() {
    this.status = !this.status;
  }

  // open sign in dialog
  openDialogLogIn() {
    this.dialog.open(DialogSignIn);
  }

  // Log out
  LogOut() {
    this.userMenuStaus = "hide";
    localStorage.removeItem('tokenAuthorization');
    this.router.navigate(['']);

  }

  // open sign in dialog
  openDialogMessage(DialogMessageData) {
    this.dialog.open(DialogMessage, {
      data: DialogMessageData,
    });
  }



}

// Message dialog
@Component({
  selector: 'dialog-message',
  templateUrl: 'dialog-message.html',
  styleUrls: ['./dialog-message.scss']
})
export class DialogMessage {
  constructor(
    public dialogRef: MatDialogRef<DialogMessage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

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
    public httpService: HttpService,
    public headerComponent: HeaderComponent,
  ) { }

  userDataLogin: UserDataLogin = new UserDataLogin();
  error: string;

  // submit Sign in form
  onSubmit(signInForm: NgForm) {
    this.userDataLogin.Email = signInForm.value.login;
    this.userDataLogin.Password = signInForm.value.password;

    this.error = '';
    this.httpService.postDataLogin(this.userDataLogin).subscribe(
      (data) => {
        // console.log( data );
        localStorage.setItem('tokenAuthorization', JSON.stringify(data));
        this.headerComponent.ngOnInit();
        this.closeDialog();
        location.reload();
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

