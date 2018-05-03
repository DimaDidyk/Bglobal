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
	isChecked:boolean = false;

	onSubmit(clientInfoForm: NgForm) {
		console.log(clientInfoForm);
	}

	constructor() { }

	ngOnInit() {
	}

}
