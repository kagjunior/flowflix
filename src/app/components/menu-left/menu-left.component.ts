import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToAddVideo() {
    this.router.navigate(['/add-video']);
  }

}
