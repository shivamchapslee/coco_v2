export class V1ReceivedConsumables {
    Response: number;
    Location_Sub_District_ID: number;
    Consumable_Name: string;
    Is_Veg: boolean;
    Consumables_Price: string;
    Hotel_Name: string;
    Website_Name: string;
    
    constructor()
    {
        this.Response = 0;
        this.Location_Sub_District_ID = 0;
        this.Consumable_Name = null;
        this.Is_Veg = null
        this.Consumables_Price = null;
        this.Hotel_Name = null;
        this.Website_Name = null;
    } 
}
