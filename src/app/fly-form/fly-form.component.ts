import { Component, OnInit, Input, Inject, Injectable, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormControl, NgModel } from '@angular/forms';
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
import { Country } from "../entity/country";
import { SimPackages, PackagesResponse } from "../entity/package";

import { ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

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


  constructor(//private http: HttpClient,
    private route: ActivatedRoute,
    private adapter: DateAdapter<any>,
    private picker: MatDatepickerModule,
    private httpService: HttpService){}


  getConfig(): Observable<Country[]> {
    return this.httpService.getCountries();
  }


  // add new date inputs
  CountryIdName = [
    { nameSalect: "country" },
  ];
  newInputs = [
    { nameSalect: "country2" },
    { nameSalect: "country3" },
  ];
  index = -1;
  addCountryNameInputs() {
    if (this.index < 1) {
      this.index = this.index + 1;
      if (this.newInputs) {
        this.CountryIdName.push(this.newInputs[this.index]);
      }
    }
  }

  // remove last county list
  removeLastList() {
    if (this.index >= 0) {
      this.CountryIdName.pop();
      this.index = this.index - 1;
    }
  }

  flyFormStor: any;
  public countries = [];
  ngOnInit() {

    // validate on page package
    if (this.route.snapshot.routeConfig.path == "sim-order/:package") {
      // check country select
      this.errorSelect1 = false;
      this.errorSelect2 = false;
      this.errorSelect3 = false;
    }


    this.adapter.setLocale('he'); //date format

    // get countries
    this.getConfig().
      subscribe(data => this.countries = data);

    // parse storage data (form)
    this.flyFormStor = JSON.parse(localStorage.getItem('flyFormValue'));

    // if form is empty
    if (this.flyFormStor == null) {
      this.flyFormStor = "";
    }
    // save country2 and country3 data
    let flyFormStorObject = new Object();
    flyFormStorObject = this.flyFormStor;
    for (let key in flyFormStorObject) {
      if (key == "country2") {
        this.index = this.index + 1;
        this.CountryIdName.push(this.newInputs[this.index]);
      }
      if (key == "country3") {
        this.index = this.index + 1;
        this.CountryIdName.push(this.newInputs[this.index]);
      }
    }

    // clear flyFormValue Storage if home page
    if (this.route.snapshot.routeConfig.path == "") {
      localStorage.removeItem('flyFormValue');
    }
  }


  // SimPackages
  simPackages:SimPackages = new SimPackages();
  packagesResponse;

  // animate show and hide
  isShow = 'hide';
  isHide = 'show';
  onSubmit(flyForm: NgForm) {
    localStorage.setItem('flyFormValue', JSON.stringify(flyForm.value));

    // data to send
    this.simPackages.Countries = [
      this.getIdCountryByName(flyForm.value.country),
      this.getIdCountryByName(flyForm.value.country2),
      this.getIdCountryByName(flyForm.value.country3),
    ];
    this.simPackages.TotalDays = flyForm.value.countDays;

    this.httpService.postDataSimPackages(this.simPackages).subscribe(
      (data) => {
        this.packagesResponse = data;
        // console.log( data );
      },
    );
  }



  // get arrey Names
  getNamesCountryArray() {
    return this.countries.map((country) => country.Name);
  }
  

  // get Id County by name
  getIdCountryByName(countryName: string) {
    let CurrentArray = this.countries.filter(countries => countries.Name === countryName);
    if( countryName == undefined ){
      return 0;
    }
    return CurrentArray[0]['Id'];
  }
  // get name County by ID
  getNameCountryById(Id: any) {
    let CurrentArray = this.countries.filter(countries => countries.Id == Id);
    return CurrentArray[0]['Name'];
  }

  // min date validation
  minDate = new Date(); //today
  daydiff(first, second) {
    first = new Date(first);
    second = new Date(second);
    return Math.round((first - second) / (1000 * 60 * 60 * 24));
  }

  // geyObject
  getObjectValue(formObject: object, valueObject: string) {
    return formObject[valueObject];
  }

  // check country select
  errorSelect1 = true;
  errorSelect2 = true;
  errorSelect3 = true;
  checkList(country, country2, country3) {
    let arrayCountries = this.countries.map((country) => country.Name);
    if (country != undefined) {
      this.errorSelect1 = true;
      for (var i = arrayCountries.length - 1; i >= 0; i--) {
        if (country == arrayCountries[i]) {
          this.errorSelect1 = false;
        }
      }
    } else {
      this.errorSelect1 = false;
    }
    if (country2 != undefined) {
      this.errorSelect2 = true;
      for (var i = arrayCountries.length - 1; i >= 0; i--) {
        if (country2 == arrayCountries[i]) {
          this.errorSelect2 = false;
        }
      }
    } else {
      this.errorSelect2 = false;
    }
    if (country3 != undefined) {
      this.errorSelect3 = true;
      for (var i = arrayCountries.length - 1; i >= 0; i--) {
        if (country3 == arrayCountries[i]) {
          this.errorSelect3 = false;
        }
      }
    } else {
      this.errorSelect3 = false;
    }
  }

  // scroll animate
  scrollAnimate(element) {
    let arrayCountries = this.countries.map((country) => country.Name);
    if (this.errorSelect1 == false || this.errorSelect2 == false || this.errorSelect3 == false) {
      this.isShow = 'show';
      this.isHide = 'hide';
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

}
