import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona/corona.service';
import { DataSaverService } from '../Service/data-saver.service';

@Component({
  selector: 'app-upper-panel',
  templateUrl: './upper-panel.component.html',
  styleUrls: ['./upper-panel.component.css']
})
export class UpperPanelComponent implements OnInit {
  confirmedColor;
  recoveredColor;
  activeColor;
  deceasedColor;

  lastDayChange: any[] = [];
  total: any;
  totalActive: number;
  totalActivePerDay: number;
  arrowImage: string;
  coronaDataStateWise: any;
  dailyChange: any;



  constructor(private  dataSaver: DataSaverService, private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getStateWise().subscribe((response) => {
      this.dataSaver.setCoronaDataStateWise(response);
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

  cardHover(event,eventType){
    if(eventType==='confirmed'){
      this.confirmedColor = event.type === 'mouseover' ? 'rgb(178,34,34,0.3)' : '#343a40';
    }
    else if(eventType==='active'){
      
      this.activeColor = event.type === 'mouseover' ? 'rgb(240, 173, 78,0.3)' : '#343a40';
    }
    else if(eventType==='deceased'){
      this.deceasedColor = event.type === 'mouseover' ? 'rgb(178,34,34,0.3)' : '#343a40';
    }
    else if(eventType==='recovered'){
      this.recoveredColor = event.type === 'mouseover' ? '	rgb(92, 184, 92,0.3)' : '#343a40';

    }
  }
}
