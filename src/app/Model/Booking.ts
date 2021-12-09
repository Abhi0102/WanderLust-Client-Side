import { Destination } from './Destination';
import { Users } from './Users';

export class Booking {
    bookingId: number;
    checkIn: Date;
    checkOut: Date;
    noOfPeople: number;
    totalCost: number;
    timeOfBooking;
    destination: Destination;
    user: Users;
}