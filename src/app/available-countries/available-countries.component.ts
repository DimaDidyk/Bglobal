import { Component, OnInit } from '@angular/core';

import { SimCountriesWithCategory } from "../entity/country";
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-available-countries',
  templateUrl: './available-countries.component.html',
  styleUrls: ['./available-countries.component.scss']
})

export class AvailableCountriesComponent implements OnInit {

	constructor( private httpService: HttpService ){}

	getConfig(): Observable<SimCountriesWithCategory[]> {
	    return this.httpService.getSimCountriesWithCategory();
	}

	public countriesWithCategory = [];
	ngOnInit() {
		// get CountriesWithCategory
		this.getConfig().subscribe(data => this.countriesWithCategory = data);
	}

}
