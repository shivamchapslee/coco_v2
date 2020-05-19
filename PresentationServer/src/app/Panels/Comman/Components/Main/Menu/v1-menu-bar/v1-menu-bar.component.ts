import { Component, OnInit } from '@angular/core';
import { V1LoginAuthenticationService } from 'src/app/Panels/Users/Services/Authentication/Login_Service/v1-login-authentication.service';

@Component({
  selector: 'app-v1-menu-bar',
  templateUrl: './v1-menu-bar.component.html',
  styleUrls: ['./v1-menu-bar.component.scss']
})
export class V1MenuBarComponent implements OnInit {

  constructor( public loginService: V1LoginAuthenticationService ) { }

  ngOnInit(): void {
  }

}
