import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalCtrl', {static: false}) modalCtrl!: ElementRef
  @Input() public title!: String;
  @Input() public items!: String;
  constructor() { }

  ngOnInit(): void {
  }

  public open() {
    this.modalCtrl.nativeElement.style.display = 'block';
  }

  public close() {
    this.modalCtrl.nativeElement.style.display = 'none';
  }
}
