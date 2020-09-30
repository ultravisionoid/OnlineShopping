import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Retailer} from '../../../models/Retailer';
import {RetailerService} from '../../../services/retailer/retailer.service';

@Component({
  selector: 'app-retailer-details',
  templateUrl: './retailer-details.component.html',
  styleUrls: ['./retailer-details.component.css']
})
export class RetailerDetailsComponent implements OnInit {

  listofretailers:Retailer[];
  constructor(private retailer_service:RetailerService ,private router : Router) { }

  ngOnInit(): void {

    this.retailer_service.getAllRetailers("GetAll").subscribe(data=>{
      this.listofretailers = data;
      console.log(this.listofretailers);
    });
  }

  addRetailer()
  {
    this.router.navigate(['retailerRegistration']);
  }

  deleteRetailer(id){
this.retailer_service.deleteRetailer(id).subscribe(data=>{
  console.log("deleted");
  this.ngOnInit();
})
  }

}
