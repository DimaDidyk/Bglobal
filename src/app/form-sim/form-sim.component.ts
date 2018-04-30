import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-form-sim',
  templateUrl: './form-sim.component.html',
  styleUrls: ['./form-sim.component.scss']
})
export class FormSimComponent implements OnInit {

	onSubmit(formSim: NgForm) {
		console.log('test');
	}

	constructor() { }

	ngOnInit() {
	}

}
