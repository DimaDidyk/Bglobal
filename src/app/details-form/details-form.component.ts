import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { HttpService } from '../services/http.service';
import { UserDataLead } from "../entity/User";

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})

export class DetailsFormComponent implements OnInit {

	emailPattern = "[^ @]*@[^ @]*";

	numberTel_keyPress(event: any) {
	    const pattern = /[0-9/+/ /(/)/]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}

	@ViewChild('telInput') telInput: ElementRef;
	tabEvent(event){
		this.telInput.nativeElement.focus();
	}

	constructor( private httpService: HttpService ){}

	
	user = {
	    'Email': '',
	    'FirstName': '',
	    'LastName': '',
	    'Phone': '',
	    'Message': 'Contact me',
	    'Affiliate': 'SimSite',
    };
	userDataLead:UserDataLead = new UserDataLead();

    onSubmit( detailsForm: NgForm ) {
		console.log( detailsForm.value );

		this.userDataLead = this.user;
		this.userDataLead.Email = detailsForm.value.email;
		this.userDataLead.FirstName = detailsForm.value.name;
		this.userDataLead.Phone = detailsForm.value.tel;

		this.httpService.postDataCreateSaleLead(this.userDataLead)
            .subscribe(
                error => console.log(error),
            );
	}
	
	ngOnInit() {
	}

}
