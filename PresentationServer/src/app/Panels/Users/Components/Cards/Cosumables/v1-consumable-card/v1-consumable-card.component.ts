import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GetConsumablesDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Get_Consumables_Details_Service/get-consumables-details.service';
import { V1ReceivedConsumables } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Consumables/v1-received-consumables.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { V1CardDetailsService } from 'src/app/Panels/Users/Services/MasterDataManagement/Consumables/Card_Details/v1-card-details.service';
import { V1ReceivedCardConsumable } from 'src/app/Panels/Users/Models/MasterDataManagement/Consumables/Received_Card_Consumables/v1-received-card-consumable.model';

@Component({
  selector: 'app-v1-consumable-card',
  templateUrl: './v1-consumable-card.component.html',
  styleUrls: ['./v1-consumable-card.component.scss']
})
export class V1ConsumableCardComponent implements OnInit { 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //receivedConsumablesDetails: V1ReceivedConsumables[];
  receivedConsumablesDetails: V1ReceivedCardConsumable[];
  public visible: boolean = false;
  obs: Observable<any>;
  //dataSource: MatTableDataSource<V1ReceivedConsumables>
  dataSource: MatTableDataSource<V1ReceivedCardConsumable>

  constructor(private changeDetectorRef: ChangeDetectorRef, public _cardsDetails: V1CardDetailsService, public getConsumableDetailsService: GetConsumablesDetailsService ) { }

  ngOnInit(): void {
    //console.log(this.receivedConsumablesDetails);
  }

  getConsumables() 
  {
    console.log("get consumables called");
    this.receivedConsumablesDetails = this._cardsDetails.cardDetails;
    console.log("card data", this.receivedConsumablesDetails); 
    this.visible = true;
    this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  //   getConsumables()
  // {
  //   this.receivedConsumablesDetails = this.getConsumableDetailsService.getConsumablesDetails; 
  //   console.log("card data", this.receivedConsumablesDetails); 
  //   this.visible = true;
  //   this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
  //   this.changeDetectorRef.detectChanges();
  //   this.dataSource.paginator = this.paginator;
  //   this.obs = this.dataSource.connect();
  // }

  goToLink(site)
  {
    console.log("site url: ",site);
    window.open(site);
  }

}



