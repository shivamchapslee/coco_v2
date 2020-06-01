import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { V1ReceivedConsumables } from '../../../Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { V1SubDistrictReceived } from '../../../Models/MasterDataManagement/Geography/Sub_Districts/Received_Data_Model/v1-sub-district-received.model';
import { V1DeliverableConsumables } from '../../../Models/MasterDataManagement/Consumables/Deliverable_Consumables/v1-deliverable-consumables.model';
import { V1SubDistrictDeliverable } from '../../../Models/MasterDataManagement/Geography/Sub_Districts/Deliverable_Data_Model/v1-sub-district-deliverable.model';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'src/app/Panels/Comman/Services/Notification_Services/notifications.service';
import { V1SubDistrictsService } from '../../../Services/MasterDataManagement/Geography/Sub_Districts/v1-sub-districts.service';
import { GetConsumablesDetailsService } from '../../../Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-v1-dashbord',
  templateUrl: './v1-dashbord.component.html',
  styleUrls: ['./v1-dashbord.component.scss']
})
export class V1DashbordComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
   obs: Observable<any>;
   dataSource: MatTableDataSource<V1ReceivedConsumables>
  constructor( public getConsumableDetailsService: GetConsumablesDetailsService, private changeDetectorRef: ChangeDetectorRef ) { }

  receivedConsumablesDetails: V1ReceivedConsumables[];
  locationList: V1SubDistrictReceived[];
  searchConsumableModel: V1DeliverableConsumables = new V1DeliverableConsumables();
  getLocationModel: V1SubDistrictDeliverable = new V1SubDistrictDeliverable();
  public visible: boolean = false;
  autoSuggestionDetails: V1ReceivedConsumables[];
  public flag: boolean = true;   

  ngOnInit(): void {  
  }

  getConsumables()
  {
    this.receivedConsumablesDetails = this.getConsumableDetailsService.consumableDetails;
    this.visible = true;
    this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

}
