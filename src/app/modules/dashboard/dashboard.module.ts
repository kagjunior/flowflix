import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DashboardRoutesModule } from 'src/app/routes/dashboard-routing';
import {ListVideoComponent} from "../../components/dashboard/list-video/list-video.component";
import {MenuLeftComponent} from "../../components/menu-left/menu-left.component";
import {MenuLeftModule} from "../menuLeft/MenuLeftModule";



@NgModule({
  declarations: [DashboardComponent, ListVideoComponent],
  imports: [
    CommonModule,
    DashboardRoutesModule,
    MenuLeftModule
  ],
  //exports: [DashboardComponent]
})
export class DashboardModule { }
