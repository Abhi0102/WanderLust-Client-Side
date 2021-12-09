import { Component, OnInit } from '@angular/core';
import { HotdealsService } from './hotdeals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css']
})
export class HotdealsComponent implements OnInit {
  abc:String[]=["D1001","D1008","D1014"];
  dataOfDeals;
  showDeals:boolean=false;
  errmsg:string;
  constructor(private hotDealsService: HotdealsService,private router:Router) { }

  ngOnInit(): void {
    this.hotDealsService.getHotDeals(this.abc).subscribe((response)=>{
      this.dataOfDeals=response;
      this.showDeals=true;
    },
    (errorResponse)=>{
      this.errmsg=errorResponse;
      console.log(this.errmsg);
      this.showDeals=false;
    })
  }
  moreDetail(destinationId){
    this.router.navigate(['/all-deals']);
  }


}
