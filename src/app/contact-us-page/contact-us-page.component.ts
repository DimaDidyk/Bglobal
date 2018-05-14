import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';


@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {

	onSubmit(contactUsForm: NgForm) {
		// console.log(this);
	}
	
	emailPattern = "[^ @]*@[^ @]*";

	numberTel_keyPress(event: any) {
	    const pattern = /[0-9/+/ /(/)/]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}

	constructor() { }

	ngOnInit() {
	}

}
