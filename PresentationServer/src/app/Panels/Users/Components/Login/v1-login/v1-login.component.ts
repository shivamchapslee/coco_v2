import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { V1LoginAuthenticationService } from '../../../Services/Authentication/Login_Service/v1-login-authentication.service';
import { V1LoginDeliverable } from '../../../Models/Authentication/Login_Deliverable_Model/v1-login-deliverable.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-v1-login',
  templateUrl: './v1-login.component.html',
  styleUrls: ['./v1-login.component.scss']
})
export class V1LoginComponent implements OnInit {

  public name="";
  public authlogin: [];
  loginViewModel: V1LoginDeliverable = new V1LoginDeliverable(); 
  loginError: string = "";
  currentUserName: string = null;

  public loginForm = new FormGroup({
    Username: new FormControl(null, Validators.required),
    Password: new FormControl(null, Validators.required)
  });

  constructor( private _notification: NotificationsService,private httpClient: HttpClient,
    private _authUser: V1UrlService, private router: Router, private loginService: V1LoginAuthenticationService ) { }

  ngOnInit(): void {
    
  }

  public onLoginClickf(event)
  {
    this.loginService.Login(this.loginViewModel)
    .subscribe(
      (response) => 
      {
        this._notification.responseHandler(response); 
        if(response["response"] == 1)
        {
          //console.log("this is it",response["data"][0]);
          this.authlogin =  response["data"];               
          if(response["data"][0][0]["RESPONSE"] == 1) 
          {
            //console.log(response); 
            this.router.navigateByUrl("#");
          }
        }
      }
    )
  }

  public onLoginClick(event)
  {
    this.loginService.Login(this.loginViewModel)
    .subscribe(
      (response) => 
      {
        this._notification.responseHandler(response); 
        if(response["response"] == 1)
        {
          this.authlogin =  response["data"];    
          if(response["data"][0]["RESPONSE"] == 1) 
          {
            console.log(response);
            this.router.navigateByUrl("#");
          }
        }
      }
    )
  }
 
}
