import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Basic/footer/footer.component';
import { NavbarComponent } from './Basic/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


import {ButtonModule} from 'primeng/button';
import { ToastModule }from 'primeng/toast';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';


import { MessageService, ConfirmationService } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { ContactComponent } from './Basic/contact/contact.component';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { ProfileComponent } from './profile/profile.component';
import { AllDealsComponent } from './all-deals/all-deals.component';
import {DynamicDialogModule, DialogService} from 'primeng/dynamicdialog';
import { BookingComponent } from './all-deals/booking/booking.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import { CalculateTotalPipe } from './all-deals/booking/calculate-total.pipe';
import { PlannedTripsComponent } from './planned-trips/planned-trips.component';
import { UniquePipe } from './Pipe/unique.pipe';
import { SorterPipe } from './Pipe/sorter.pipe';
import { BookingSortPipe } from './Pipe/booking-sort.pipe';
import { SearchByPipe } from './Pipe/search-by.pipe';
import { FormatPipe } from './Pipe/format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    HotdealsComponent,
    ProfileComponent,
    AllDealsComponent,
    BookingComponent,
    CalculateTotalPipe,
    PlannedTripsComponent,
    UniquePipe,
    SorterPipe,
    BookingSortPipe,
    SearchByPipe,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SplitButtonModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    InputNumberModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    RouterModule
  ],
  providers: [MessageService, ConfirmationService, DialogService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
