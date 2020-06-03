import { Component, OnInit } from '@angular/core';
import { V1SignUpServiceService } from '../../../Services/SignUp_Services/SignUp_Submittion_Service/v1-sign-up-service.service';
import { NotificationsService } from '../../../Services/Notification_Services/notifications.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { V1SignUpSubmittion } from '../../../Models/SignUp_Model/v1-sign-up-submittion.model';

@Component({
  selector: 'app-v1-sign-up',
  templateUrl: './v1-sign-up.component.html',
  styleUrls: ['./v1-sign-up.component.scss']
})
export class V1SignUpComponent implements OnInit {

  public valid: boolean =  false;
  public userData: V1SignUpSubmittion = new V1SignUpSubmittion(); 

  public insertUserDetails = new FormGroup({
    firstName       :       new FormControl('',Validators.required),
    lastName        :       new FormControl('',Validators.required),
    email           :       new FormControl('',Validators.required),
    phone           :       new FormControl('',Validators.required),
    gender          :       new FormControl('',Validators.required),
    userName        :       new FormControl('',Validators.required),
    Password        :       new FormControl('',Validators.required),
    firstLoginFlag  :       new FormControl('',Validators.required)
  })

  constructor(private _notification: NotificationsService, public signUpResponse:V1SignUpServiceService) { }

  ngOnInit(): void {    
  }

  get f() { return this.insertUserDetails.controls; }

  onSubmitClick()
  {
    let userDetails = 
    {
      First_Name: "Sunakshi",
      Last_Name: "Sharma",
      EMAIL_Address:"afdfsfd@gmail.com",
      Phone_Number:"1234567898",
      Gender: "F",
      User_Name: "Sona",
      Password: "sameasabove",
      First_Login_Flag: false
    }

    this.userData.First_Name        =     this.insertUserDetails.value.firstName;
    this.userData.Last_Name         =     this.insertUserDetails.value.lastName;
    this.userData.EMAIL_Address     =     this.insertUserDetails.value.email;
    this.userData.Phone_Number      =     this.insertUserDetails.value.phone;
    this.userData.Gender            =     this.insertUserDetails.value.gender;
    this.userData.User_Name         =     this.insertUserDetails.value.userName;
    this.userData.Password          =     this.insertUserDetails.value.Password;
    // this.userData.First_Login_Flag  =     this.insertUserDetails.value.firstLoginFlag;

    
    console.log("userDetails", this.userData);
    //  return;   

    this.signUpResponse.userSubmittion(this.userData)
    .subscribe(
      (response) => 
      {
        this._notification.responseHandler(response); 
        if(response["response"] == 1)
        {
          console.log("this is it",response);
          this.insertUserDetails.reset();
          //this._notification.responseHandler(response["data"][0]["RESPONSE"]); 

          // this.authlogin =  response["data"];               
          // if(response["data"][0][0]["RESPONSE"] == 1) 
          // {
          //   console.log(response); 
          //   this.router.navigateByUrl("#");
          // }
        }
      }
    )
  }

}
