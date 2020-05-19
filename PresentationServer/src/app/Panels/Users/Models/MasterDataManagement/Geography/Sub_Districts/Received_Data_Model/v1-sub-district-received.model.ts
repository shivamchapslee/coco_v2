export class V1SubDistrictReceived {
    Response: number;
    Sub_District_Code: number;
    Sub_District_Name: string; 
    State_Code_FK: number;

    constructor(){
        this.Response = 0,
        this.Sub_District_Code = 0,
        this.Sub_District_Name = null,
        this.State_Code_FK = 0
    }
}
