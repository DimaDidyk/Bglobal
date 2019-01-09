import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  private id;
  private startDate: Date;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.startDate = params['startDate'];
    });
  }

  ngOnInit() {

    console.log(this.route);
    this.route.params.subscribe(params => console.log(params));
    console.log(this.id);
    console.log(this.startDate);
    this.httpService.getPackage(this.id).subscribe(data => console.log(data));

  }


}
