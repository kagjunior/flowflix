import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from 'src/app/components/add-video/add-video.component';
import { AddVideoRoutesModule } from 'src/app/routes/addVideo-routing';
import {FormMovieComponent} from "../../components/form-movie/form-movie.component";
import {MenuLeftModule} from "../menuLeft/MenuLeftModule";



@NgModule({
  declarations: [AddVideoComponent, FormMovieComponent],
  imports: [
    CommonModule,
    AddVideoRoutesModule,
    MenuLeftModule
  ]
})
export class AddVideoModule { }
