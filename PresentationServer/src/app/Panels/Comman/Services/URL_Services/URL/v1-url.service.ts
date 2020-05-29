import { Injectable } from '@angular/core';
import { ConfigService } from '../Config_Service/config.service';

@Injectable({
  providedIn: 'root'
})
export class V1UrlService {

  constructor(private _config: ConfigService) { }

  getFoodMenu             :   string  =   this._config.cocoapi + "api/admin/mdm/food/v1/get-foodMenu"; 
  authUser                :   string  =   this._config.cocoapi + "api/auth/user/v1/authenticate";
  authUserV2              :   string  =   this._config.cocoapi + "api/auth/user/v2/authenticate";
  getConsumablesDetails   :   string  =   this._config.cocoapi + "api/mdm/foodSelect/v2/get-consumables";
  getSubDistricts         :   string  =   this._config.cocoapi + "api/mdm/geo/subDistricts/v1/get-sub-districts";
  getCardDetails          :   string  =   this._config.cocoapi + "api/cs/actionsubmittion/v1/get-cardDetails";
} 
