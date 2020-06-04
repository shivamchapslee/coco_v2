import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { Observable } from 'rxjs';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetConsumablesDetailsService {

  public consumableDetails: V1ReceivedConsumables[];

  constructor(private http: HttpClient, private _notification: NotificationsService,  
    private _getConsumablesDetails: V1UrlService) { } 

  getConsumablesDetails(searchConsumableModel: V1DeliverableConsumables): Observable<V1ReceivedConsumables[]>  
  {
    return this.http.post<V1ReceivedConsumables[]>(this._getConsumablesDetails.getConsumablesDetails,searchConsumableModel,{responseType: "json"})
    .pipe(map(
      (data: V1ReceivedConsumables[]) =>
      {
        this.consumableDetails = data["data"]; 
        return data;
      }
    ))
  }

}
