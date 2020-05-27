import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GetConsumablesDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-v1-consumable-card',
  templateUrl: './v1-consumable-card.component.html',
  styleUrls: ['./v1-consumable-card.component.scss']
})
export class V1ConsumableCardComponent implements OnInit { 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  receivedConsumablesDetails: V1ReceivedConsumables[];
  public visible: boolean = false;
  obs: Observable<any>;
  dataSource: MatTableDataSource<V1ReceivedConsumables>
  public siteURL;

  constructor(public getConsumableDetailsService: GetConsumablesDetailsService, private changeDetectorRef: ChangeDetectorRef ) { }

  ngOnInit(): void {
    //console.log(this.receivedConsumablesDetails);
  }

  getConsumables()
  {
    this.receivedConsumablesDetails = this.getConsumableDetailsService.consumableDetails; 
    //console.log("card data", this.receivedConsumablesDetails[0]["Consumable_URL"]);
    this.siteURL = this.receivedConsumablesDetails[0]["Consumable_URL"];
    this.visible = true;
    this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  goToLink()
  {
    window.open(this.siteURL);
  }

}
