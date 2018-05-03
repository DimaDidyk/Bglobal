import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ClientInfoComponent } from '../client-info/client-info.component';


@Component({
  selector: 'app-form-sim',
  templateUrl: './form-sim.component.html',
  styleUrls: ['./form-sim.component.scss']
})


export class FormSimComponent implements OnInit {

	simcards = [
		{value: 'כרטיס סים כלשהו'},
		{value: 'כרטיס סים כלשהו'},
		{value: 'כרטיס סים כלשהו'}
	];

	onSubmit(formSim: NgForm) {
		console.log( formSim );
	}

	constructor() { }

	ngOnInit() {
	}


}
