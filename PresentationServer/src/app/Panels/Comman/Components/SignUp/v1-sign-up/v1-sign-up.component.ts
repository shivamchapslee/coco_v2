import { Component, OnInit } from '@angular/core';
import { V1SignUpServiceService } from '../../../Services/SignUp_Services/SignUp_Submittion_Service/v1-sign-up-service.service';
import { NotificationsService } from '../../../Services/Notification_Services/notifications.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { V1SignUpSubmittion } from '../../../Models/SignUp_Model/v1-sign-up-submittion.model';
import { PasswordMatchService } from '../../../Services/CustomValidations/passwordMatch/password-match.service';

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
    email           :       new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    phone           :       new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    gender          :       new FormControl('',Validators.required),
    userName        :       new FormControl('',Validators.required),
    Password        :       new FormControl('',[Validators.required, Validators.minLength(6), this.passwordCheck]),  //, MustMatch('Password', 'PasswordCheck')
    // firstLoginFlag  :       new FormControl('',Validators.required),
    PasswordCheck   :       new FormControl('',[Validators.required, this.passwordCheck])
  });

  constructor(private _notification: NotificationsService, public signUpResponse:V1SignUpServiceService, private customValidator: PasswordMatchService) { }

  ngOnInit(): void {    
  }

  get f() { return this.insertUserDetails.controls; } 

  passwordCheck(control)
  {
    if(control.value != null)
    {
      var conPass = control.value;
      var pass = control.root.get('Password');
      if(pass)
      {
        var password = pass.value;
        if(conPass !== "" && password !== "")
        {
          return {
            passwordValidity: true
          }
        }
        else
          return null;
      }
    }
  }

  onSubmitClick()
  {
    if (this.insertUserDetails.valid) 
    {
      this.userData.First_Name        =     this.insertUserDetails.value.firstName;
      this.userData.Last_Name         =     this.insertUserDetails.value.lastName;
      this.userData.EMAIL_Address     =     this.insertUserDetails.value.email;
      this.userData.Phone_Number      =     this.insertUserDetails.value.phone;
      this.userData.Gender            =     this.insertUserDetails.value.gender;
      this.userData.User_Name         =     this.insertUserDetails.value.userName;
      this.userData.Password          =     this.insertUserDetails.value.Password;      
      // this.userData.First_Login_Flag  =     this.insertUserDetails.value.firstLoginFlag;
      
      console.log("userDetails", this.userData);
       return;   

      this.signUpResponse.userSubmittion(this.userData)
      .subscribe(
        (response) => 
        {
          this._notification.responseHandler(response); 
          if(response["response"] == 1)
          {
            console.log(response);
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
    else
    {
      this._notification.info("Please enter all required fields")
       this.valid =  true; 
    }
  }

  // export function MustMatch(controlName: string, matchingControlName: string) 
  // {
  //   return (formGroup: FormGroup) => 
  //   {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //       // return if another validator has already found an error on the matchingControl
  //       return;
  //     }

  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //         matchingControl.setErrors({ mustMatch: true });
  //     } else {
  //         matchingControl.setErrors(null);
  //     }
  //   };
  // }
 

}
