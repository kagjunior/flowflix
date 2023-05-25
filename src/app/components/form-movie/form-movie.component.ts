import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //document.querySelectorAll('select').init();
  }

}
