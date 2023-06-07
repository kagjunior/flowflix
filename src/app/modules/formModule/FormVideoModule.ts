import { NgModule } from '@angular/core';
import {FormMovieComponent} from "../../components/form-movie/form-movie.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";




@NgModule({
  declarations: [FormMovieComponent],
  exports: [FormMovieComponent],
  imports: [FormsModule, CommonModule]
})
export class FormVideoModule { }
