import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  confirmPassword!: string
  constructor() { }

  ngOnInit(): void {
  }

  public SignUp() {

  }

}
