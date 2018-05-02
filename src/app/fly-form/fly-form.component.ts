import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-fly-form',
	templateUrl: './fly-form.component.html',
	styleUrls: ['./fly-form.component.scss']
})

export class FlyFormComponent implements OnInit {
	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];


	onSubmit(FlyForm: NgForm) {
		console.log('test');
	}

	constructor() { 
		
	}

	ngOnInit() {
	}

}
