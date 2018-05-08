import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';

@Component({
	selector: 'app-additionally',
	templateUrl: './additionally.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./additionally.component.scss']
})
export class AdditionallyComponent implements OnInit {

	// get sim active form
	@Input() simAcriveFromData: string;


	// show animation
	isShow = 'hide';
	onSubmit(additionallyFrom: NgForm) {
		this.isShow = 'show';
		console.log(this.isShow);
	}

	// scroll animate
	scrollAnimate(element) {
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}

	constructor() { }

	ngOnInit() {
	}

}
