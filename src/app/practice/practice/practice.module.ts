import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { ImageComponent } from './image/image.component';
import { CoronaComponent } from './corona/corona.component';
import {TableModule} from 'primeng/table';
import { SortDataPipe } from './Pipes/sort-data.pipe';
import { AbsolutePipe } from './Pipes/absolute.pipe';
import { NumberStylePipe } from './Pipes/number-style.pipe';
import { CoronaTableComponent } from './corona-table/corona-table.component';
import { UpperPanelComponent } from './upper-panel/upper-panel.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { MapComponent } from './map/map.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PracticeComponent, ImageComponent, CoronaComponent, SortDataPipe, AbsolutePipe, NumberStylePipe, CoronaTableComponent, UpperPanelComponent, MapComponent],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    TabMenuModule,
    MenuModule,
    MessageModule,
    TableModule,
    Ng2GoogleChartsModule
    
    // FontAwesomeModule
  ]
})
export class PracticeModule { }
