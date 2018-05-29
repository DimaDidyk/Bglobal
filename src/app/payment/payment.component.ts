import { Component, OnInit, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

	constructor(private router: Router) {}

	toptilCVV = "CVV is an anti-fraud security feature to help verify that you are in possession of your credit card. On most credit cards (including Visa and Mastercard), the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. On American Express credit cards, the four-digit CVV number is printed on the front of the card above the card’s account number.";

	@Input() totalFormData: string;

	// show animation
	isShow = 'hide';
	onSubmit(PaymentForm: NgForm) {
		this.isShow = 'show';
		console.log(this.isShow);
		this.router.navigate( ['thank-you'] );
	}
	
	// // scroll animate
	// scrollAnimate(element) {
	// 	setTimeout(function(){
	// 		element.scrollIntoView({ behavior: "smooth", block: "start" });
	// 	}, 250)
	// }

	number_keyPress(event: any) {
	    const pattern = /[0-9]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}
	

	ngOnInit() {
	}

}