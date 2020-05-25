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
  public Sortvisible: boolean = false;
  public websiteSort: boolean = false;
  public priceSort: boolean = true;
  public hotelSort: boolean = false;

  constructor(public getConsumableDetailsService: GetConsumablesDetailsService, private changeDetectorRef: ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  getConsumables()
  {
    this.receivedConsumablesDetails = this.getConsumableDetailsService.consumableDetails; 
    //console.log("card data", this.receivedConsumablesDetails);
    this.visible = true;
    this.dataSource = new MatTableDataSource(this.receivedConsumablesDetails);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  toggleSotingList(j)
  {
    console.log(j);
    if(j==1)
    {
      this.priceSort = true;
      this.hotelSort = false;
      this.hotelSort = false;
    }
    else if(j == 2)
    {
      
    }
  }

  listView()
  {
    this.Sortvisible = !this.Sortvisible;
  }

}
