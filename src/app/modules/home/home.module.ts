import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HomeRoutesModule } from 'src/app/routes/home-routing';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutesModule
  ],
  //exports: [HomeComponent]
})
export class HomeModule { }
