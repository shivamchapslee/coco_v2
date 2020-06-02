import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from '../../Notification_Services/notifications.service';
import { V1UrlService } from '../../URL_Services/URL/v1-url.service';
import { V1SignUpSubmittion } from '../../../Models/SignUp_Model/v1-sign-up-submittion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class V1SignUpServiceService {

  constructor(private http: HttpClient,private _getConsumablesDetails: V1UrlService) { }

  userSubmittion(userDetails: V1SignUpSubmittion)
  {
    // console.log("data received by service",userDetails);
    return this.http.post<V1SignUpSubmittion[]>(this._getConsumablesDetails.insertUserDetails,userDetails,{responseType: "json"})
    // .pipe(map(
    //   (data:V1SignUpSubmittion[]) =>
    //   { 
    //     this.cardDetails = data["data"];
    //     return data; 
    //   }
    // ))
  }
}
