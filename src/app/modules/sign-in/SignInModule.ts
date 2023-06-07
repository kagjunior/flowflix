import {NgModule} from "@angular/core";
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FormVideoModule} from "../formModule/FormVideoModule";
import {SignInRoutingModule} from "../../routes/SignInRouting";

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, FormsModule, FormVideoModule]
})

export class SignInModule {}
