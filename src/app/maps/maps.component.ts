import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  @Input() loc;
  private _display:boolean;

  ngOnInit() {

      this._initMap(this.loc);

  }

  private _initMap(loc) {

    this.loc = loc;
    var latitude = parseFloat(this.loc.coordinates.latitude);
    var longitude = parseFloat(this.loc.coordinates.longitude);
    var address = {lat: latitude, lng: longitude};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 2, center: address, mapTypeControl: false, streetViewControl: false});
    var marker = new google.maps.Marker({position: address, map: map});

  }  
  


}
