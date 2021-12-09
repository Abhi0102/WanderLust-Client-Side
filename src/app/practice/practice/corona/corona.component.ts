import { Component, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { CoronaService } from './corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
  
  expander=6;
  expanderClicked;
  sortOrder = "des";
  totalActivePerDay: number;
  coronaDataDistrictWise: any;
  total: any;
  totalActive: number;
  coronaDataStateWise: any;
  stateName: any;
  stateCode: Map<string, any>;
  arrowImage: string;
  stateCodeSmall: any[];

  dailyChange: any;
  lastDayChange: any[] = [];

  y: any;
  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getStateWise().subscribe((response) => {

      this.coronaDataStateWise = (response);
      this.total = response["TT"];
      // this.totalActivePerDay = this.total.delta.confirmed - this.total.delta.deceased - this.total.delta.recovered;
      this.totalActive = this.total.total.confirmed - this.total.total.deceased - this.total.total.recovered;
      if (this.totalActivePerDay > 0) {
        this.arrowImage = "pi-arrow-up";
      }
      else {
        this.arrowImage = "pi-arrow-down";
      }
      delete response["TT"];
      // this.stateCode = (Object.keys(response));
    })
    this.coronaService.getDistrictWise().subscribe((response) => {
      delete response["State Unassigned"];
      delete response["Lakshadweep"]
      this.coronaDataDistrictWise = (response);
      this.stateName = (Object.keys(response));
    });

    this.coronaService.getDailyChange().subscribe((response) => {
      this.dailyChange = response;
      this.lastDayChange.push(this.dailyChange.states_daily[this.dailyChange.states_daily.length - 1]);
      this.lastDayChange.push(this.dailyChange.states_daily[this.dailyChange.states_daily.length - 2]);
      this.lastDayChange.push(this.dailyChange.states_daily[this.dailyChange.states_daily.length - 3]);
      this.totalActivePerDay = this.lastDayChange[2].tt - this.lastDayChange[1].tt - this.lastDayChange[0].tt;


      
      for (var i = 0; i < this.lastDayChange.length; i++) {

        var a = this.lastDayChange[i];
        for (var key in a) {
          // console.log(key)
          var temp;
          if (a.hasOwnProperty(key)) {
            temp = a[key];
            delete a[key];
            a[key.toUpperCase()] = temp;
          }
        }
        this.lastDayChange[i] = a;

      }



    })


  }


  expanderEvent(event){
    this.expander=event;
  }

  

}
