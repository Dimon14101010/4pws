import {Component, Input, OnInit} from '@angular/core';
import {GeolocationService} from "../geoLocation.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AgmInfoWindow} from "@agm/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  testMarker;
  itemsOnpage = 10;
  suffix: any;
  coordinates: any = {};
  venue: any = {};
  venuesList: any = [];
  constructor(private getLocation: GeolocationService, private http: HttpClient) {}

  ngOnInit() {
    this.getLocation.getLocate()
      .then(response => this.coordinates = response)
      .then(() => {
        const params = new HttpParams()
          .set ('venuePhotos', '1')
          .set ('v', '20161016')
          .set ('ll', this.coordinates.latitude + ',' + this.coordinates.longitude)
          .set ('query', '')
          .set ('client_id' , 'I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1')
          .set ('client_secret' , 'ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM')
        this.http.get
        ('https://api.foursquare.com/v2/venues/explore', {params})
          .subscribe(response => {this.venue = response;
            this.venuesList = this.venue.response.groups[0].items;
            console.log(this.venuesList); });

      })

  }
  newMarker (i, s){
    this.testMarker = !this.testMarker;
  }
  addItems () {
    this.itemsOnpage += this.itemsOnpage
  }
}


// var config = {
//   apiKey: "AIzaSyB9qVUbmkY9Rb7zOAjcCFwVeCHkKRivRH0",
//   authDomain: "project-agilie.firebaseapp.com",
//   databaseURL: "https://project-agilie.firebaseio.com",
//   projectId: "project-agilie",
//   storageBucket: "",
//   messagingSenderId: "128373483912"
// };
