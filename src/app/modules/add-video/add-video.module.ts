import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from 'src/app/components/add-video/add-video.component';
import { AddVideoRoutesModule } from 'src/app/routes/addVideo-routing';



@NgModule({
  declarations: [AddVideoComponent],
  imports: [
    CommonModule,
    AddVideoRoutesModule
  ]
})
export class AddVideoModule { }
