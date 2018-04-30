import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


	onSubmit(PaymentForm: NgForm) {
		console.log('test');
	}

	
	constructor() { }

	ngOnInit() {
	}

}
