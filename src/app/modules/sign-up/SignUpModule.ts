import {NgModule} from "@angular/core";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import {CommonModule} from "@angular/common";
import {SignUpRoutingModule} from "../../routes/SignUpRouting";
import {FormsModule} from "@angular/forms";
import {FormVideoModule} from "../formModule/FormVideoModule";

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule,FormVideoModule, FormsModule]
})

export class SignUpModule {}
