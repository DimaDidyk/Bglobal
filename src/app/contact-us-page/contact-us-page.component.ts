import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';

import { HttpService } from '../services/http.service';
import { UserDataLead } from "../entity/User";
import { DialogMessageData } from "../entity/Dialog";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {

	constructor( 
		private httpService: HttpService,
		private headerComponent: HeaderComponent,
	){}

	user = {
		'Email': '',
		'FirstName': '',
		'LastName': '',
		'Phone': '',
		'Message': 'Contact me',
		'Affiliate': 'SimSite',
	};
	userDataLead:UserDataLead = new UserDataLead();
	dialogMessageData:DialogMessageData = new DialogMessageData();

	onSubmit(contactUsForm: NgForm) {
		this.dialogMessageData.title = '';
		this.dialogMessageData.message = 'message';

		this.userDataLead = this.user;
		this.userDataLead.Email = contactUsForm.value.email;
		this.userDataLead.FirstName = contactUsForm.value.name;
		this.userDataLead.Phone = contactUsForm.value.tel;
		this.userDataLead.Message = contactUsForm.value.message;

		if( this.httpService.checkLogin() ){
			// create Sale lide
			// console.log( 'SALE' );
			this.httpService.postDataCreateSaleLead(this.userDataLead).subscribe(
				data => {
					this.dialogMessageData.message = 'על פנייתך. מלל: מספר פנייתך: ' + data + ', נציגנו יצרו עמך קשר בהקדם';
					this.headerComponent.openDialogMessage(this.dialogMessageData);
				},
				error => {
					this.dialogMessageData.title = 'שגיאה. מלל:';
					this.dialogMessageData.message = error.error.Message;
					this.headerComponent.openDialogMessage(this.dialogMessageData);
				},
			);
		}else{
			// create Service lide
			// console.log( 'Service' );
			this.httpService.postDataCreateServiceLead(this.userDataLead).subscribe(
				data => {
					this.dialogMessageData.message = 'על פנייתך. מלל: מספר פנייתך: ' + data + ', נציגנו יצרו עמך קשר בהקדם';
					this.headerComponent.openDialogMessage(this.dialogMessageData);
				},
				error => {
					this.dialogMessageData.title = 'שגיאה. מלל:';
					this.dialogMessageData.message = error.error.Message;
					this.headerComponent.openDialogMessage(this.dialogMessageData);
				},
			);
		}
	}
	
	// checked email input
	emailPattern = "[^ @]*@[^ @]*";
	numberTel_keyPress(event: any) {
	    const pattern = /[0-9/+/ /(/)/]/;
	    let inputChar = String.fromCharCode(event.charCode);
	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}

	ngOnInit() {
	}
}
