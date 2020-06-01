import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GetConsumablesDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { V1CardDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Card_Details/v1-card-details.service';
import { V1ReceivedCardConsumable } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Card_Consumables/v1-received-card-consumable.model';
import { map } from 'rxjs/operators';
import { V1DeliverableConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';


@Component({
  selector: 'app-v1-consumable-card',
  templateUrl: './v1-consumable-card.component.html',
  styleUrls: ['./v1-consumable-card.component.scss']
})
export class V1ConsumableCardComponent implements OnInit { 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  receivedConsumablesDetails: V1ReceivedConsumables[];
  receivedCardDetails: V1ReceivedCardConsumable[];
  public visible: boolean = false;
  obs: Observable<any>;
  dataSource: MatTableDataSource<V1ReceivedConsumables>
  public indexnumbers: any[] = [];
  public viewCard: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef, private _notification: NotificationsService,
    public _cardsDetails: V1CardDetailsService, public getConsumableDetailsService: GetConsumablesDetailsService ) { }

  ngOnInit(): void {    
  }

  getConsumables() 
  {    
    this.receivedConsumablesDetails = this.getConsumableDetailsService.consumableDetails; 
    this.receivedCardDetails = this._cardsDetails.cardDetails;
    //console.log("card data", this.receivedCardDetails);
    this.visible = true;
    this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  sameConsumableList(id)
  {    
    // console.log("card id", id);//return; 
    for(let list of this.receivedCardDetails)
    {
      if(id == list.Consumables_ID)
      {        
        let copy = Object.assign({},this.receivedCardDetails);
        //console.log("copy object", copy);
        var values = Object.keys(copy).map(function(it)
        {
         return copy[it]          
        })     
        //console.log("value array", values); 
        this.indexnumbers = values;
        //console.log("coppied object: ",this.indexnumbers);
      }      
    }
  }

  goToLink(site)
  {
    //console.log("site url: ",site);
    window.open(site);
  }

}



