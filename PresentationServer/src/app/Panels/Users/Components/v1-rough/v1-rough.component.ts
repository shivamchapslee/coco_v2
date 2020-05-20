import { Component, OnInit } from '@angular/core';
import { V1SubDistrictsService } from '../../Services/MasterDataManagement/Geography/Sub_Districts/v1-sub-districts.service';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { GetConsumablesDetailsService } from '../../Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { V1ReceivedConsumables } from '../../Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { V1SubDistrictReceived } from '../../Models/MasterDataManagement/Geography/Sub_Districts/Received_Data_Model/v1-sub-district-received.model';
import { V1DeliverableConsumables } from '../../Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { V1SubDistrictDeliverable } from '../../Models/MasterDataManagement/Geography/Sub_Districts/Deliverable_Data_Model/v1-sub-district-deliverable.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-v1-rough',
  templateUrl: './v1-rough.component.html',
  styleUrls: ['./v1-rough.component.scss']
})
export class V1RoughComponent implements OnInit {

  public filerSearch = new FormGroup
  (
    {
      City          :   new FormControl(null, Validators.required),
      Consumables   :   new FormControl(null, Validators.required)
    }
  );
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  receivedConsumablesDetails: V1ReceivedConsumables[];
  locationList: V1SubDistrictReceived[];
  searchConsumableModel: V1DeliverableConsumables = new V1DeliverableConsumables();
  getLocationModel: V1SubDistrictDeliverable = new V1SubDistrictDeliverable();
  public valid: boolean =  false;


  constructor(private _getLocation: V1SubDistrictsService,
    private _notification: NotificationsService, private getConsumableDetailsService: GetConsumablesDetailsService) { }

  ngOnInit(): void {
    this.getLocations();

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    console.log("value", value);
    const filterValue = value.toLowerCase();
    console.log("filtered value", filterValue);
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayFn(subject)
  { console.log("subject object is:", subject);
    return subject ? subject : undefined}


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
      
      this.searchConsumableModel.Location             =   this.filerSearch.value.City;
      this.searchConsumableModel.Consumable_Name      =   this.filerSearch.value.Consumables;
      this.searchConsumableModel.Select_By            =   "all";
      this.searchConsumableModel.Select_Param         =   "null";
      //this.visible = true      
      //console.log("inputs for search",this.searchConsumableModel);
      this.getConsumableDetailsService.getConsumablesDetails(this.searchConsumableModel)
      .subscribe(
        (response: V1ReceivedConsumables[]) => 
        {
          this._notification.responseHandler(response); 
          if(response["response"] == 1)
          { 
            if(response["data"][0]["RESPONSE"] == 1)
            {       
            //this.dashbord.flag = true;   
            this.receivedConsumablesDetails = response["data"];
            //this.receivedConsumablesDetails = response;
            //this.resultArray = this.receivedConsumablesDetails.map(function(a) {return a["Consumable_Name"];});
            console.log(this.receivedConsumablesDetails);
            //console.log("required", this.resultArray);
            }
            else
            {
              console.log("INVALID SEARCH TERM");            
              //this.dashbord.flag = false; 
            } 
          }
        }
      )
      // console.log("called from parent to child");
      //this.dashbord.getConsumables();
    }
    else
    {
      this._notification.info("Please enter all required fields")
      // this.valid =  true; 
      // this.dashbord.flag  =  false;  
    }
  }
}
