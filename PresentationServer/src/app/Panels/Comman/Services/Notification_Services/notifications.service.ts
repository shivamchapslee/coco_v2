import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private config = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: 5000,
    easing: 'ease-in',
    easeTime: 300,
    toastClass: 'ngx-toastr',
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    tapToDismiss: true,
    enableHtml: true
  }

  constructor(private _toastr: ToastrService) { }

  info(message: string, subject?: string): void {
    this._toastr.info(message, subject, this.config);
  }
  error(message: string, subject?: string): void {
    this._toastr.error(message, subject, this.config);
  }
  warning(message: string, subject?: string): void {
    this._toastr.warning(message, subject, this.config);
  }
  success(message: string, subject?: string): void {
    this._toastr.success(message, subject, this.config);
  }

  responseHandler(apiResponse: any) {
    if(apiResponse.sys_Message != null)
    {
      if(apiResponse.response == -1)
      {
        if(apiResponse.sys_Message.length > 0)
        {
          this.error(apiResponse.sys_Message)
        }
      }
      if(apiResponse.response == 0)
      {
        if(apiResponse.sys_Message.length > 0)
        {
          this.info(apiResponse.sys_Message)
        }
      }
      if(apiResponse.response == 1)
      {
        if(apiResponse.sys_Message.length > 0)
        {
          this.success(apiResponse.sys_Message)
        }
      }
    }

    return apiResponse;
  }
}
