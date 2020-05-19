import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { Router } from '@angular/router';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { map } from 'rxjs/operators';
import { V1LoginDeliverable } from '../../../Models/Authentication/Login_Deliverable_Model/v1-login-deliverable.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class V1LoginAuthenticationService {

  constructor(private httpClient: HttpClient,private _notification: NotificationsService, 
    private _authUser: V1UrlService, private router: Router) { }

  currentUserName: string = null;
  tokenString:  string = null;

  public Login(loginViewModel: V1LoginDeliverable): Observable<any>
   {
    return this.httpClient.post<any>(this._authUser.authUserV2,loginViewModel, { responseType: "json" })  
    .pipe(map(loginResponse => {
      if(loginResponse)
      { 
         console.log(loginResponse);

         if(loginResponse["data"] != null)     
         {          
           //console.log("inside");
           this.currentUserName = loginResponse["data"]["0"]["User_Name"]; 
           this.tokenString = loginResponse["data"][0];
           sessionStorage.currentUserName = JSON.stringify(loginResponse);
           //console.log("vlaue of session storage is",sessionStorage.currentUserName);
         }
      }
      return loginResponse;
      }));
   }

   public Logout()
  {
    sessionStorage.removeItem("currentUserName");
    this.currentUserName = null;
    this.router.navigateByUrl("#");
  }
  
}
