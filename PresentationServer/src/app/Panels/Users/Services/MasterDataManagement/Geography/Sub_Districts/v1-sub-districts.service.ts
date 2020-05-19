import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { V1SubDistrictDeliverable } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Deliverable_Data_Model/v1-sub-district-deliverable.model';
import { Observable } from 'rxjs';
import { V1SubDistrictReceived } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Received_Data_Model/v1-sub-district-received.model';

@Injectable({
  providedIn: 'root'
})
export class V1SubDistrictsService {

  constructor(private http: HttpClient, private _notification: NotificationsService, private _getSubDistricts: V1UrlService) { }

  getSubDistricts(getSubDistrictsModel: V1SubDistrictDeliverable): Observable<V1SubDistrictReceived[]>  
  {
      return this.http.post<V1SubDistrictReceived[]>(this._getSubDistricts.getSubDistricts,getSubDistrictsModel);
  }

}
