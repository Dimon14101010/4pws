import {Injectable} from "@angular/core";

@Injectable ()
export class GeolocationService {
  coordinates: any = {};

  constructor() {
  }
  getLocate () {
    return new Promise((resolve) => {

      navigator.geolocation.getCurrentPosition(position => {
        this.coordinates = position.coords;
        if (this.coordinates) {
          resolve(this.coordinates);
        }
      });
    });
  }
}
