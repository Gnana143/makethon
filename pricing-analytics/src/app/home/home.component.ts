import { Component, OnInit, OnChanges, OnDestroy, DoCheck ,ElementRef, NgZone, ViewChild } from "@angular/core";
import { TabDirective } from 'ngx-bootstrap/tabs';
import { FormGroup, FormBuilder, Validators ,FormControl  } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  templateUrl: 'home.html',
  selector: 'app-home',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  value: string;
  frm: FormGroup;
  success: boolean;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  onSelect(data: TabDirective): void {
  }
  constructor(fb: FormBuilder ,private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) {
    //Form
    this.frm = fb.group({
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required]],
      brandweight: ['', []],
      modelweight: ['', []],
      Priceweight: ['', []],
      inStock: [],
      phone: ['', [Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]]
    });
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //Map inputs
  public latitude: number;
  public longitude: number;
  public searchControlsrc: FormControl;
  public searchControldst: FormControl;
  public zoom: number;
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [100, 150, 200,70];
  public pieChartType:string = 'pie';
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),59, 80,(Math.random() * 100),56,(Math.random() * 100),40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
 
 
  onSave() {
    if (this.frm.valid) {
      console.log("form valid");
    }
    else {
      console.log("Validation failed");
    }
  }
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControlsrc = new FormControl();
    this.searchControldst = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}