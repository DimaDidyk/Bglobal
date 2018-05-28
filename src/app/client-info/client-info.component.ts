import { Component, OnInit, Input, Inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { toggleHeight } from '../animation';
import { SimOrderPageComponent } from '../sim-order-page/sim-order-page.component';

@Component({
	selector: 'app-client-info',
	templateUrl: './client-info.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./client-info.component.scss'],
})


export class ClientInfoComponent implements OnInit {

	constructor( public route: ActivatedRoute, private router: Router ) {}

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

	isChecked:boolean = true;

	// show animation
	isShow = 'hide';
	onSubmit(clientInfoForm: NgForm) {
		this.isShow = 'show';
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
