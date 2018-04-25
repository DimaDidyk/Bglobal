import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


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

	constructor() { }

	ngOnInit() {
	}

}
