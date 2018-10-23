import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { toggleHeight } from '../animation';
import { SimOrderPageComponent } from '../sim-order-page/sim-order-page.component';

import { HttpService } from '../services/http.service';
import { UserDataRegister } from "../entity/User";
 
import { DialogMessageData } from "../entity/Dialog";
import { HeaderComponent } from "../header/header.component";

@Component({
	selector: 'app-client-info',
	templateUrl: './client-info.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./client-info.component.scss'],
})


export class ClientInfoComponent implements OnInit {

	constructor( 
		public route: ActivatedRoute,
		private router: Router,
		private httpService: HttpService,
		private headerComponent: HeaderComponent,
	) {}

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
	isChecked:boolean = false;
	telPrefix:string = '972';

	userDataRegister:UserDataRegister = new UserDataRegister();

	// show animation
	isShow = 'hide';
	dialogMessageData:DialogMessageData = new DialogMessageData();
	onSubmit(clientInfoForm: NgForm) {
		// message Dialog
		this.dialogMessageData.title = '';
		this.dialogMessageData.message = 'message';

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
		this.userDataRegister.Affiliate = 'string';

		// console.log( this.userDataRegister );
		this.httpService.postDataRegister(this.userDataRegister)
            .subscribe(
                data => {
                	console.log(data);
					this.dialogMessageData.title = 'Registration successful';
					this.headerComponent.openDialogMessage(this.dialogMessageData);
					this.isShow = 'show';
                },
                error => {
                	console.log(error);
                	this.dialogMessageData.title = 'שגיאה. מלל:';
					this.dialogMessageData.message = error.error.Message;
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
		if(element){
			setTimeout(function(){
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 250);
		}
	}
	
	ngOnInit() {
		// console.log( this.routeCurentPath );
		// console.log( this.routePackage );
		// console.log( this.route );
	}

}
