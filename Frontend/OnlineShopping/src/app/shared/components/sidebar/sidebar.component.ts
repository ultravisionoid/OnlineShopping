import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  login=true;
  // name:any;
  // name=localStorage.getItem("userData");
  // name:any;
  name="Aayush"
  constructor() { }

  ngOnInit(): void {
  }

}
