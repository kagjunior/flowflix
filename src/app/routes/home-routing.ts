import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";


const homeRoute: Routes = [
    {
        path: 'home', component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoute)],
    exports: [RouterModule]
})

export class HomeRoutesModule {}