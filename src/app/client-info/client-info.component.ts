import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { SimOrderPageComponent } from '../sim-order-page/sim-order-page.component';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})


export class ClientInfoComponent implements OnInit {

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

	onSubmit(clientInfoForm: NgForm) {
		console.log(clientInfoForm);
	}

	constructor() { }

	ngOnInit() {
	}

}
