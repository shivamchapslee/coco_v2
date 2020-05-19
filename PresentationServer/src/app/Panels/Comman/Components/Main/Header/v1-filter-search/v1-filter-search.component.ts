import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { V1SubDistrictReceived } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Received_Data_Model/v1-sub-district-received.model';
import { HttpClient } from '@angular/common/http';
import { V1SubDistrictsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Geography/Sub_Districts/v1-sub-districts.service';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { GetConsumablesDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { V1SubDistrictDeliverable } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Deliverable_Data_Model/v1-sub-district-deliverable.model';
import { V1DashbordComponent } from 'src/app/Panels/Users/Components/Dashbord/v1-dashbord/v1-dashbord.component';

@Component({
  selector: 'app-v1-filter-search',
  templateUrl: './v1-filter-search.component.html',
  styleUrls: ['./v1-filter-search.component.scss']
})
export class V1FilterSearchComponent implements OnInit {

  @ViewChild("dashbord") dashbord: V1DashbordComponent;

  public filerSearch = new FormGroup
  (
    {
      City: new FormControl(null, Validators.required),
      Consumables: new FormControl(null, Validators.required)
    }
  );

  receivedConsumablesDetails: V1ReceivedConsumables[];
  locationList: V1SubDistrictReceived[];
  searchConsumableModel: V1DeliverableConsumables = new V1DeliverableConsumables();
  getLocationModel: V1SubDistrictDeliverable = new V1SubDistrictDeliverable();
  public visible: boolean = false;
  autoSuggestionDetails: V1ReceivedConsumables[];
  public valid: boolean =  false;

  constructor( private _getLocation: V1SubDistrictsService,
    private _notification: NotificationsService, private getConsumableDetailsService: GetConsumablesDetailsService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  get f() { return this.filerSearch.controls; }

  getLocations()
  {
    this._getLocation.getSubDistricts(this.getLocationModel) 
    .subscribe(
      (response: V1SubDistrictReceived[]) => 
      {        
        this._notification.responseHandler(response); 
        if(response["response"] == 1)
        {                                          
            this.locationList = response["data"]; 
            //console.log(response["data"]);       
        }
      }
    )
  }

  consumableSearch($event)
  {    
  
    if (this.filerSearch.valid) 
    {
      //console.log(this.searchConsumableModel);
      this.searchConsumableModel.Location             =   this.filerSearch.value.City;
      this.searchConsumableModel.Consumable_Name      =   this.filerSearch.value.Consumables;
      this.searchConsumableModel.Select_By            =   "all";
      this.searchConsumableModel.Select_Param         =   "null";
      this.visible = true      
      this.getConsumableDetailsService.getConsumablesDetails(this.searchConsumableModel)
      .subscribe(
        (response: V1ReceivedConsumables[]) => 
        {
          this._notification.responseHandler(response); 
          if(response["response"] == 1)
          { 
            if(response["data"][0]["RESPONSE"] == 1)
            {       
            this.dashbord.flag = true;   
            this.receivedConsumablesDetails = response["data"];
            console.log(response);
            }
            else
            {
              console.log("INVALID SEARCH TERM");            
              this.dashbord.flag = false; 
            } 
          }
        }
      )
      // console.log("called from parent to child");
      this.dashbord.getConsumables();
    }
    else
    {
      this._notification.info("Please enter all required fields")
      this.valid =  true; 
      this.dashbord.flag  =  false;  
    }
  }
}
