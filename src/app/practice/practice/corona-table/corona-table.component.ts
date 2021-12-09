import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoronaService } from '../corona/corona.service';
import { DataSaverService } from '../Service/data-saver.service';

@Component({
  selector: 'app-corona-table',
  templateUrl: './corona-table.component.html',
  styleUrls: ['./corona-table.component.css']
})
export class CoronaTableComponent implements OnInit {


  @Output()
  expanderEvent:EventEmitter<number>=new EventEmitter<number>();
  expander=6;
  expanderClicked;
  tableWidth=40;

  sortBy = "confirmed";
  clicked = false;

  coronaDataStateWise: any;
  totalActivePerDay: number;
  arrowImage: string;
  coronaDataDistrictWise: any;
  stateName: any;
  dailyChange: any;
  lastDayChange: any[] = [];



  constructor(private coronaService:CoronaService, private dataSaver: DataSaverService) { }

  ngOnInit(): void {

    
    this.coronaService.getStateWise().subscribe((response) => {
      this.coronaDataStateWise = (response);
      if (this.totalActivePerDay > 0) {
        this.arrowImage = "pi-arrow-up";
      }
      else {
        this.arrowImage = "pi-arrow-down";
      }
      delete response["TT"];
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
    // this.dataSaver.dataStateWise.subscribe((e)=>{console.log(e)})
    // console.log(this.dataSaver.dataStateWise.value);
  }

  expandTable(){
    if(this.expander==6){
      this.expander=12;
      this.expanderEvent.emit(this.expander);
      this.tableWidth=20;
      this.expanderClicked=true;
    }
    else{
      this.expander=6;
      this.expanderEvent.emit(this.expander);
      this.tableWidth=40;
      this.expanderClicked=false;
    }
    
  }

  sortingActivated(sort) {
    this.sortBy = sort;
    this.clicked = !this.clicked;
  }

}
