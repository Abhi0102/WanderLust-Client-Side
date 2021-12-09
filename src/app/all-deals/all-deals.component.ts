import { Component, OnInit } from '@angular/core';
import { AllDealsService } from './all-deals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css']
})
export class AllDealsComponent implements OnInit {
  deals;
  contiFilter;
  sorter;
  continent:any[]=new Array();
  param;
  fragment;
  errMsg;
  showError=false;
  constructor(private allDeals: AllDealsService, private route: ActivatedRoute, private dialogService: DialogService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=> {this.param=p.searchBy});
    this.allDeals.getAllDeals().subscribe((response) => {
      this.deals = response;
      this.showError=false;
      
      this.continent=response.map(d=>{return d.continent}).filter((value,index,self)=>{if(self.indexOf(value)===index) return self.indexOf(value)===index});
      
    }, (errorResponse)=>{
      this.showError=true;
      this.errMsg=errorResponse;

    });
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewChecked(): void {

    if (this.fragment != null) {
      document.querySelector('#' + this.fragment).scrollIntoView({ behavior: 'smooth' });
    }
    this.fragment=null;


  }
  show(destination) {
    if(sessionStorage.getItem('userName')!=null){
    const ref = this.dialogService.open(BookingComponent, {
      data: {
        dest: destination
      },
      header: destination.destinationName,
      width: '70%'
    });
  }
  else{
    this.router.navigate(['/login']);
  }
  }

  onClick(){
    console.log(this.deals)
  }




}
