import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddVideoComponent } from "../components/add-video/add-video.component";


const addVideoRoutes: Routes = [
    {
        path: 'add-video', component: AddVideoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(addVideoRoutes)],
    exports:[RouterModule]
})

export class AddVideoRoutesModule {}