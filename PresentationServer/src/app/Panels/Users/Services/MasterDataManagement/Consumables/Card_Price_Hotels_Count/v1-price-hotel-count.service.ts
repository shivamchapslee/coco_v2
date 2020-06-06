import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { map } from 'rxjs/operators';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { Observable } from 'rxjs';
import { V1PriceHotelCount } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Card_Price_Hotels_Count/v1-price-hotel-count.model';

@Injectable({
  providedIn: 'root'
})
export class V1PriceHotelCountService {

  public priceHotel: V1PriceHotelCount[];

  constructor(private http: HttpClient, private _notification: NotificationsService,  
    private _getConsumablesDetails: V1UrlService) { }

    getPriceHotelCount(searchConsumableModel: V1DeliverableConsumables)//: Observable<V1PriceHotelCount[]>
    {            
      this.http.post<V1PriceHotelCount[]>(this._getConsumablesDetails.getPriceHotelCount,searchConsumableModel,{responseType: "json"})
      .subscribe(
        (response: V1PriceHotelCount[]) => 
        {        
          this._notification.responseHandler(response); 
          if(response["response"] == 1)
          {  
  
              this.priceHotel = response["data"]; 
              //console.log("price hotel mapping",response["data"]);       
          }
        }
      )
    }
}
