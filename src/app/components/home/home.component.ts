import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  constructor() { }

  ngOnInit(): void {
  }

  public openModal() {
    this.modal.open();
  }
}
