import {NgModule} from "@angular/core";
import {AddExtraitComponent} from "../../components/add-extrait/add-extrait.component";
import {CommonModule} from "@angular/common";
import {AddExtraitRoutesModule} from "../../routes/addExtrait-routing";
import {FormsModule} from "@angular/forms";
import {MenuLeftModule} from "../menuLeft/MenuLeftModule";
import {FormVideoModule} from "../formModule/FormVideoModule";

@NgModule({
  declarations: [AddExtraitComponent],
  imports: [CommonModule, AddExtraitRoutesModule, FormsModule, MenuLeftModule, FormVideoModule]
})

export class AddExtraitModule {}
