import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Booking } from 'src/app/Model/Booking';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  data;
  booking: Booking;
  bookingForm: FormGroup;
  dateValue: Date;
  maxDate;
  minDate;
  bookingId;
  err;
  checked: boolean = false;

  constructor(private bookingService: BookingService,private router:Router, private ref:DynamicDialogRef ,private config: DynamicDialogConfig, private datePipe: DatePipe, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.data = this.config.data.dest;
    let today = new Date();
    let afterOneMonth = new Date();
    afterOneMonth.setDate(afterOneMonth.getDate() + 30);
    this.minDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    this.maxDate = this.datePipe.transform(afterOneMonth, 'yyyy-MM-dd');
    // console.log(this.data)
    // this.bookingForm= this.formBuilder.group({
    //   journeyDate: ['',[Validators.required]],
    //   noOfPeople: [1,[Validators.required,Validators.min(1),Validators.max(11)]]
    // });

    this.bookingForm = this.formBuilder.group({
      checkIn: ['', [Validators.required]],
      checkOut: ['', []],
      noOfPeople: [1, [Validators.required, Validators.min(1), Validators.max(11)]],
      totalCost: ['', []],
      timeOfBooking: ['', []],
      destination: ['', []],
      // user: this.formBuilder.group({
      //   userId: ['', []]
      // })
    })

  }

  onSubmit() {
    // console.log("Submitted");

  }
  checkBox() {
    this.checked = !this.checked;
  }

  confirmBooking() {
    // let inDate = new Date(this.bookingForm.value.checkIn);
    // let outDate = new Date();
    // console.log(inDate);
    
    // outDate.setDate(inDate.getDate() + this.data.noOfNights);
    // console.log(inDate.getDate())
    // console.log(this.bookingForm.value.checkIn);
    this.bookingForm.value.checkIn = new Date(this.bookingForm.value.checkIn);
    // this.bookingForm.value.checkOut = outDate;
    this.bookingForm.value.destination=this.data;
    // this.bookingForm.value.user.userId=parseInt(sessionStorage.getItem('userId'));
    this.bookingForm.value.totalCost = (this.bookingForm.value.noOfPeople * this.data.chargePerPerson) * (1 - this.data.discount / 100) + this.data.flightCharge;
    // this.booking=new Booking();
    // this.booking.destination=this.data;
    // console.log(this.bookingForm.value);
    // this.booking.user.userId=parseInt(sessionStorage.getItem('userId'));
    // console.log(this.booking.user.userId);
    // this.bookingService.confirmBooking(this.booking).subscribe( id=>{
    //   this.bookingId=id;
    // })
    this.bookingService.confirmBooking(this.bookingForm.value).subscribe( (response) => {
      this.bookingId=response;
      
    }, (errorResponse)=>{
      // console.log(errorResponse)
      this.err=errorResponse;
    });

    // console.log(this.bookingId);
    // console.log(this.err);
  }
  toPlannedTrips(){
    this.ref.close();
    this.router.navigate(['/planned-trips'])
  }

}
