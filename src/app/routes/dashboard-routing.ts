import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";


const dashboardRoute: Routes = [
    {
        path: 'dashboard', component: DashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoute)],
    exports: [RouterModule]
})

export class DashboardRoutesModule {}