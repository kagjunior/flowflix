import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HomeRoutesModule } from 'src/app/routes/home-routing';
import { ModalComponent } from 'src/app/utils/modal/modal.component';




@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [
    CommonModule,
    HomeRoutesModule
  ],
  //exports: [HomeComponent]
})
export class HomeModule { }
