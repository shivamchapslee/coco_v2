import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  // AuthURL: string = "/auth/";
  // ServiceUrl: string = "/offlineapi/";
  // Common: string = "/common/";
  cocoapi: string = "http://localhost:59613/";
// cocoapi: string = "http://localhost:5000/";
}
