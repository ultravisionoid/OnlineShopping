import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=false;
  constructor() { }
  @Output() toggler:EventEmitter<any>=new EventEmitter();
  toggleSideBar(){
   this.toggler.emit();  
  }
  
  ngOnInit() {
   
  }

}
