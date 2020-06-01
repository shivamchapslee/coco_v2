import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { V1ReceivedCardConsumable } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Card_Consumables/v1-received-card-consumable.model';

@Injectable({
  providedIn: 'root'
})
export class V1CardDetailsService {

  public cardDetails: V1ReceivedCardConsumable[];

  constructor(private http: HttpClient, private _notification: NotificationsService, 
    private _getConsumablesDetails: V1UrlService) { }

    getCardDetails(searchConsumableModel: V1DeliverableConsumables): Observable<V1ReceivedCardConsumable[]>
    {
      //console.log("inside card service: ", searchConsumableModel)
      return this.http.post<V1ReceivedCardConsumable[]>(this._getConsumablesDetails.getCardDetails,searchConsumableModel,{responseType: "json"})
      .pipe(map(
        (data: V1ReceivedCardConsumable[]) =>
        {
          //console.log("inside service: ",data); 
          this.cardDetails = data["data"];
          return data; 
        }
      ))
    }
}
