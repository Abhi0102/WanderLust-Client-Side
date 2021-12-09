// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  loginUri: "http://localhost:4000/Wanderlust_Server/UserAPI/login",
  registerUri: "http://localhost:4000/Wanderlust_Server/UserAPI/register",
  hotDealsUri: "http://localhost:4000/Wanderlust_Server/DealsAPI/hotDeals",
  userDetail: "http://localhost:4000/Wanderlust_Server/UserAPI/user/",
  allDeals: "http://localhost:4000/Wanderlust_Server/DealsAPI/allDeals",
  booking: "http://localhost:4000/Wanderlust_Server/DealsAPI/booking",
  getBooking: "http://localhost:4000/Wanderlust_Server/DealsAPI/getBooking",
  deleteBooking: "http://localhost:4000/Wanderlust_Server/DealsAPI/cancelBooking",
  coronaUPI: "https://api.covid19india.org/v4/data.json",
  coronaUPISecond:"https://api.covid19india.org/state_district_wise.json",
  dailyChange: "https://api.covid19india.org/states_daily.json",
  testData: "https://api.covid19india.org/data.json",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
