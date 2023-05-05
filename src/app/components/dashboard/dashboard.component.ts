import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('video') video!: HTMLElement 
  constructor() { }

  ngOnInit(): void {
    //this.video?.onplay()
  }

}
