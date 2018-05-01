import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-sim-active-form',
  templateUrl: './sim-active-form.component.html',
  styleUrls: ['./sim-active-form.component.scss']
})
export class SimActiveFormComponent implements OnInit {

	onSubmit(simAcriveFrom: NgForm) {
		console.log('test');
	}
	constructor() { }

	ngOnInit() {
	}

}
