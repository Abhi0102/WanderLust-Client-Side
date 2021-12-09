import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';   
import { CoronaService } from './corona/corona.service';
import { DataSaverService } from './Service/data-saver.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  
  items;
  activeItem: MenuItem;

  constructor(private coronaService: CoronaService, private dataSaver: DataSaverService) { }

  ngOnInit(): void {

    // this.coronaService.getDailyChange().subscribe((response)=>{
    //   this.dataSaver.setCoronaDataDailyChanges(response);
    // })
    // this.coronaService.getStateWise().subscribe((response)=>
    // this.dataSaver.setCoronaDataStateWise(response)
    // )
    // this.coronaService.getDistrictWise().subscribe((response)=>{
    //   this.dataSaver.dataDistrictWise.next(response);
    // })
    
    
    // this.dataSaver.dataDailyChanges.subscribe((response)=>console.log(response))
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  this.activeItem = this.items[0];
  }

 

  

}
