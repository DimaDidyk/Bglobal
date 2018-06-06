import { Component, OnInit, Input, Inject, Injectable, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';
import { toggleHeight } from '../animation';
import { Сountries } from './countries';

import { map, startWith } from 'rxjs/operators';

import { DateAdapter } from '@angular/material/core';

@Component({
	selector: 'app-fly-form',
	templateUrl: './fly-form.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./fly-form.component.scss'],
})

@Injectable()
export class FlyFormComponent implements OnInit {

	constructor( private http: HttpClient,
	 private adapter: DateAdapter<any>,
	 private picker: MatDatepickerModule) {}

	getCountriesUrl = 'https://getsimcard.com/api/api/Account/GetCountries';

	getConfig(): Observable<Сountries[]> {
	    return this.http.get<Сountries[]>(this.getCountriesUrl);
	}


	// @ViewChild('matTfse') matTfse: ElementRef;
	public countries = [];
	ngOnInit() {
		this.adapter.setLocale('fr'); //date format
		
		this.getConfig().
		subscribe(data => this.countries = data );

		console.log( this.flyFormStor );

	}

	// clickPick(){
	// 	console.log( 'this' );
	// 	let classname = document.getElementsByClassName('mat-calendar-body-today');
	// 	let buttonClose = document.createElement('div');
	// 	buttonClose.className = "calendar-close-control";
	// 	buttonClose.innerHTML = 'x';
	// 	document.getElementsByClassName('mat-calendar-body-today')[0].appendChild(buttonClose);
	// 	console.log( document.getElementsByClassName('mat-calendar-body-today')[0] );
	// }


	// get arrey Names
	getNamesCountryArray() {
		return this.countries.map((country) => country.Name);
	}

	// get Id County by name
	getIdCountryByName(countryName: string) {
		let CurrentArray = this.countries.filter( countries => countries.Name === countryName );
		return CurrentArray[0]['Id'];
	}
	// get name County by ID
	getNameCountryById(Id: any) {
		let CurrentArray = this.countries.filter( countries => countries.Id == Id );
		return CurrentArray[0]['Name'];
	}

	// min date validation
	minDate = new Date(); //today
	daydiff(first, second) {
	    return Math.round((second-first)/(1000*60*60*24));
	}

	// geyObject
	getObjectValue(formObject:object, valueObject:string){
		return formObject[valueObject];
	}

	// add new date inputs
	CountryIdName = [
		{ nameSalect: "country"},
	];
	index = -1;
	addCountryNameInputs(newInputs) {
		if( this.index < 1 ){
			newInputs = [
				{ nameSalect: "country2"},
				{ nameSalect: "country3"},
			];
			this.index = this.index + 1;
		    if ( newInputs ) {
		  		this.CountryIdName.push( newInputs[this.index] );
			}
		}
	}

	// scroll animate
	scrollAnimate(element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	// animate show and hide
	isShow = 'hide';
	isHide = 'show';
	onSubmit(flyForm: NgForm) {
		localStorage.setItem( 'flyFormValue', JSON.stringify(flyForm.value) );
		this.isShow = 'show';
		this.isHide = 'hide';
	}

	// get form value
	flyFormStor = JSON.parse( localStorage.getItem( 'flyFormValue' ) );

}
