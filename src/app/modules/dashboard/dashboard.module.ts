import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DashboardRoutesModule } from 'src/app/routes/dashboard-routing';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutesModule
  ],
  //exports: [DashboardComponent]
})
export class DashboardModule { }
