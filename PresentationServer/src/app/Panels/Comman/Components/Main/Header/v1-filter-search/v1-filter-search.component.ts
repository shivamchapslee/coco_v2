import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { V1SubDistrictReceived } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Received_Data_Model/v1-sub-district-received.model';
import { V1SubDistrictsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Geography/Sub_Districts/v1-sub-districts.service';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { GetConsumablesDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { V1SubDistrictDeliverable } from 'src/app/Panels/Users/Models/MasterDataManagement/Geography/Sub_Districts/Deliverable_Data_Model/v1-sub-district-deliverable.model';
import { V1DashbordComponent } from 'src/app/Panels/Users/Components/Dashbord/v1-dashbord/v1-dashbord.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { V1CardDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Card_Details/v1-card-details.service';
import { V1ConsumableCardComponent } from 'src/app/Panels/Users/Components/Cards/Cosumables/v1-consumable-card/v1-consumable-card.component';
import { V1PriceHotelCountService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Card_Price_Hotels_Count/v1-price-hotel-count.service';
import { IpServiceService } from 'src/app/Panels/Comman/Services/IpService/ip-service.service';

@Component({
  selector: 'app-v1-filter-search',
  templateUrl: './v1-filter-search.component.html',
  styleUrls: ['./v1-filter-search.component.scss']
})
export class V1FilterSearchComponent implements OnInit { 

  //@ViewChild("dashbord") dashbord: V1DashbordComponent;
  @ViewChild("card") card: V1ConsumableCardComponent;

  public filerSearch = new FormGroup
  (
    {
      City          :   new FormControl(null, Validators.required),
      Consumables   :   new FormControl(null, Validators.required)
    }
  );

  ipAddress:string;
  receivedConsumablesDetails: V1ReceivedConsumables[];
  displayHomeImg: boolean = true;
  locationList: V1SubDistrictReceived[];
  searchConsumableModel: V1DeliverableConsumables = new V1DeliverableConsumables();
  getLocationModel: V1SubDistrictDeliverable = new V1SubDistrictDeliverable();
  public visible: boolean = false;
  autoSuggestionDetails: V1ReceivedConsumables[];
  public valid: boolean =  false;
  public resultArray: any;

  constructor( private _getLocation: V1SubDistrictsService, private cookieService: CookieService, private cardDetails: V1CardDetailsService,private ip:IpServiceService,
    private _notification: NotificationsService, private getConsumableDetailsService: GetConsumablesDetailsService, public priceHotelCount:V1PriceHotelCountService) { }

  ngOnInit(): void {

    this.getLocations();
    // this.getIP();  

    if( this.cookieService.get('Location') != "" && this.cookieService.get('Location') != '-1')
    {
      let location = this.cookieService.get('Location');
      this.filerSearch.patchValue({City: location})
    }
  }

  get f() { return this.filerSearch.controls; }

  // getIP()  
  // {  
  //   this.ip.getIPAddress().subscribe((res:any)=>{     
  //     this.ipAddress=res.ip;  
  //   });  
  // }  

  myControl = new FormControl();
  
  displayFn(subject)
  { return subject ? subject : undefined }

  private deleteCookie()
  {this.cookieService.set('Location', '-1');}


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
            //console.log("Location",response["data"]);       
        }
      }
    )
  }

  consumableSearch($event)
  {    
    //console.log("search vlaue", this.filerSearch.value.Consumables)
    if (this.filerSearch.valid) 
    {
      this.cookieService.set('Location', this.filerSearch.value.City);
                
      this.searchConsumableModel.Location             =   this.filerSearch.value.City;
      this.searchConsumableModel.Consumable_Name      =   this.filerSearch.value.Consumables;
      this.searchConsumableModel.Select_By            =   "all";
      this.searchConsumableModel.Select_Param         =   "null";
      this.visible = true      
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
            }
            else
            {
              console.log("INVALID SEARCH TERM");            
              //this.dashbord.flag = false; 
            } 
          }
        }
      )      
      //console.log("called from parent to child",this.searchConsumableModel);
      //this.dashbord.getConsumables();
    }
    else
    {
      this._notification.info("Please enter all required fields")
      this.valid =  true; 
      //this.dashbord.flag  =  false;  
    }
  }

  consumableCardDetails($event)
  {    
    //console.log("search vlaue", this.filerSearch.value.Consumables)
    if (this.filerSearch.valid) 
    {
      if(this.receivedConsumablesDetails)
      {
        this.displayHomeImg = false;
      }
      this.cookieService.set('Location', this.filerSearch.value.City);
                
      this.searchConsumableModel.Location             =   this.filerSearch.value.City;
      this.searchConsumableModel.Consumable_Name      =   this.filerSearch.value.Consumables;
      this.searchConsumableModel.Select_By            =   "all";
      this.searchConsumableModel.Select_Param         =   "null";
      this.visible = true      
      //console.log("inputs for search",this.searchConsumableModel);
      this.cardDetails.getCardDetails(this.searchConsumableModel)
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
            }
            else
            {
              console.log("INVALID SEARCH TERM");            
              //this.dashbord.flag = false;
              this.card.viewCard = false;
              alert("NO MATCHING ITEM FOUND"); 
            } 
          }
        }
      )
      // console.log("called from parent to child");
     // this.dashbord.getConsumables();
     this.card.getConsumables();
     this.card.viewCard = true;
    }
    else
    {
      this._notification.info("Please enter all required fields")
      this.valid =  true; 
      //this.dashbord.flag  =  false;  
      this.card.viewCard = false;
    }
  } 

}
