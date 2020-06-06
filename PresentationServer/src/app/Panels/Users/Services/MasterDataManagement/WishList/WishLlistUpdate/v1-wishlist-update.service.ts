import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { V1UrlService } from 'src/app/Panels/Comman/Services/URL_Services/URL/v1-url.service';
import { V1WishListUpdateSent } from 'src/app/Panels/Users/Models/MasterDataManagement/WishList/WishListUpdate/WishListUpdateSent/v1-wish-list-update-sent.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class V1WishlistUpdateService {

  //status:any;

  constructor(private http: HttpClient,private _getConsumablesDetails: V1UrlService) { }

  updateWishListStatus(wishListSelect:V1WishListUpdateSent): Observable<any>
  {
    return this.http.post(this._getConsumablesDetails.updateWishList,wishListSelect,{responseType: "json"})
    .pipe(map(
      data =>
      {
        // this.status = data["data"];  
        // console.log(data);       
        return data;
      }
    ))
  }
}
