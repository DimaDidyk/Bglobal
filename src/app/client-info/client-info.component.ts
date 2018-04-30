import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

	onSubmit(clientInfoForm: NgForm) {
		console.log('test');
	}
	constructor() { }

	ngOnInit() {
	}

}
