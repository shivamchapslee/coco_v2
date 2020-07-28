import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-v1-footer',
  templateUrl: './v1-footer.component.html',
  styleUrls: ['./v1-footer.component.scss']
})
export class V1FooterComponent implements OnInit {

  facebook:string = "https://www.facebook.com/people/Shivam-Sharma/100003063069623";
  instagram:string = "https://www.instagram.com/invites/contact/?i=vuu6o35rogfs&utm_content=1t388ze";

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(site)
  {
    if(site == 1)
    {
      window.open(this.facebook);
    }
    else if(site == 2)
    {
      window.open(this.instagram);
    }
    
  }

}
