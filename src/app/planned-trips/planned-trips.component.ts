import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PlannedTripsService } from './planned-trips.service';

@Component({
  selector: 'app-planned-trips',
  templateUrl: './planned-trips.component.html',
  styleUrls: ['./planned-trips.component.css']
})
export class PlannedTripsComponent implements OnInit {
  responseLength;
  booking;
  sorter='default';
  filterBy='plannedAll';
  today= new Date();
  todayStr;
  constructor(private datePipe: DatePipe, private plannedTripsService: PlannedTripsService, private confirmationService: ConfirmationService, private messageSevice: MessageService) { }

  ngOnInit(): void {
    this.todayStr= this.datePipe.transform(this.today,'yyyy-MM-dd');

    this.plannedTripsService.getBooking().subscribe((response) => {
      this.responseLength=response.length;
      this.booking = response;
    });
    
  }

  cancelBooking(cancelBooking) {
    this.plannedTripsService.deleteBooking(cancelBooking).subscribe((response) => {
      this.showSuccess(response);
      this.plannedTripsService.getBooking().subscribe((response) => {
        this.booking = response;
      });

    }, (errorResponse) => {
      this.showError(errorResponse);
    })
  }

  confirmCancelBooking(cancelBooking) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to cancel booking?',
      accept: () => {
        this.cancelBooking(cancelBooking);
        //Actual logic to perform a confirmation
      }
    });
  }

  showSuccess(response) {
    this.messageSevice.add({ severity: 'success', summary: 'Success Message', detail: response });
  }
  showError(errorResponse) {
    this.messageSevice.add({ severity: 'error', summary: 'Error Message', detail: errorResponse });
  }

}
