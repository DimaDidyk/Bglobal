import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-sim-active-form',
  templateUrl: './sim-active-form.component.html',
  styleUrls: ['./sim-active-form.component.scss']
})
export class SimActiveFormComponent implements OnInit {

	minDate = new Date(); //today

	daydiff(first, second) {
	    return Math.round((second-first)/(1000*60*60*24));
	}

	name:string="Tom";
	dataInfo:string = "col-sm-6";

	@Input() clientInfoFormData: string;

	onSubmit(simAcriveFrom: NgForm) {
		console.log('test');
	}
	constructor() { }

	ngOnInit() {
	}

}
