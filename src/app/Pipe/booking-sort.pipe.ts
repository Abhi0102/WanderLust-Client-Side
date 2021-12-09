import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingSort'
})
export class BookingSortPipe implements PipeTransform {

  today = new Date();
  constructor(private datePipe: DatePipe) { }

  transform(data: any, sorter: string): any {
    if (sorter === 'default') {
      let todayStr = this.datePipe.transform(this.today, 'yyyy-MM-dd');
      let upcomingBooking = [];
      let ongoingBooking = [];
      let completedBooking = []
      data.filter((data) => {
        if (data.checkIn > todayStr) upcomingBooking.push(data);
        else if (data.checkIn <= todayStr && data.checkOut >= todayStr) ongoingBooking.push(data);
        else completedBooking.push(data)
      });

      upcomingBooking = upcomingBooking.sort((a, b) => {
        if (a.checkIn > b.checkIn) {
          return 1;
        } return -1;
      })
      ongoingBooking = ongoingBooking.sort((a, b) => {
        if (a.checkIn > b.checkIn) {
          return 1;
        } return -1;
      })
      completedBooking = completedBooking.sort((a, b) => {
        if (a.checkIn > b.checkIn) {
          return 1;
        } return -1;
      })
      return upcomingBooking.concat(ongoingBooking, completedBooking);
    }
    else if (sorter === 'idInc') {
      return data.sort((a, b) => {
        if (a.bookingId > b.bookingId) {
          return 1;
        } return -1;
      }
      )
    }
    else if (sorter === 'idDec') {
      return data.sort((a, b) => {
        if (a.bookingId < b.bookingId) {
          return 1;
        } return -1;
      }
      )
    }


    // return data.sort((a, b) => {
    //   if (a.checkIn > b.checkIn) {
    //     return 1;
    //   } return -1;

    // });
  }

}
