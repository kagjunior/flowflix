import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AddExtraitComponent} from "../components/add-extrait/add-extrait.component";


const addExtraitRoutes: Routes = [
  {
    path: 'clip', component: AddExtraitComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(addExtraitRoutes)],
  exports:[RouterModule]
})

export class AddExtraitRoutesModule {}
