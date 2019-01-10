import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { toggleOpacity } from '../animation';
import { SimOrderPageComponent } from '../sim-order-page/sim-order-page.component';

import { HttpService } from '../services/http.service';
import { UserDataRegister } from "../entity/User";

import { DialogMessageData } from "../entity/Dialog";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  animations: [
    toggleOpacity
  ],
  styleUrls: ['./client-info.component.scss'],
})


export class ClientInfoComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private headerComponent: HeaderComponent,
  ) { }


  loading = false;


  // get data from Sim
  @Input() formSimData: string;

  emailPattern = "[^ @]*@[^ @]*";

  numberTel_keyPress(event: any) {
    const pattern = /[0-9/+/ /(/)/]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  isChecked: boolean = true;
  telPrefix: string = '972';

  userDataRegister: UserDataRegister = new UserDataRegister();

  // show animation
  isShow = 'hide';
  isShowCurrent = 'show';
  dialogMessageData: DialogMessageData = new DialogMessageData();
  onSubmit(clientInfoForm: NgForm) {

    //start loading animation
    this.loading = true;

    // message Dialog
    this.dialogMessageData.title = '';
    // this.dialogMessageData.message = 'message';

    // User Data
    this.userDataRegister.Email = clientInfoForm.value.email;
    // 
    this.userDataRegister.Password = clientInfoForm.value.tel.slice(-7);
    this.userDataRegister.ConfirmPassword = clientInfoForm.value.tel.slice(-7);
    // 
    this.userDataRegister.FirstName = clientInfoForm.value.name;
    this.userDataRegister.LastName = clientInfoForm.value.soname;
    this.userDataRegister.Phone = clientInfoForm.value.tel;
    this.userDataRegister.Prefix = this.telPrefix;
    this.userDataRegister.AllowSendMail = clientInfoForm.value.checked;
    this.userDataRegister.Affiliate = 'SimCardSite';

    // console.log( this.userDataRegister );
    this.httpService.postDataRegister(this.userDataRegister)
      .subscribe(
        data => {


          localStorage.setItem('tokenAuthorization', JSON.stringify(data));
          this.headerComponent.login();
          this.isShow = 'show';
          this.isShowCurrent = 'hide';

          // this.dialogMessageData.title = 'Registration successful';
          // this.dialogMessageData.message = '';
          //this.headerComponent.openDialogMessage(this.dialogMessageData);
         

          //stop loading animation
          this.loading = false;

        },
        error => {
          //stop loading animation
          this.loading = false;

          console.log(error);
          console.log(error.error.ModelState);
          // for (var i = error.error.ModelState.length - 1; i >= 0; i--) {
          // 	console.log( error.error.ModelState[i] );
          // }
          
          this.headerComponent.openDialogMessage(this.dialogMessageData);
          // this.isShow = 'show';
        },
    );
  }

  // curentPath
  routeCurentPath = this.route.snapshot.routeConfig.path;
  // if not empty package
  routePackage = this.route.snapshot.params.package;

  // scroll animate
  scrollAnimate(element) {
    if (element) {
      setTimeout(function () {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  }

  ngOnInit() {
    // console.log( this.routeCurentPath );
    // console.log( this.routePackage );
    // console.log( this.route );
    if (this.httpService.checkLogin()) {
      this.isShowCurrent = 'hide';
      this.isShow = 'true';
    }
  }

}
